import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { User, UserCreds } from '../types';
import { Product } from '../types/product.type';

// array in local storage for registered users
let users = [{ id: '1', username: 'user', password: '1234' }];
const products: Product[] = [
  {
    id: '1ec58d8d-03bd-4d08-9d3a-8dd6667c5f28',
    available: false,
    name: 'Sheena',
    dealIncluded: true,
  },
  {
    id: 'c656bec9-2dcd-4004-a299-ca6b21741a4d',
    available: true,
    name: 'Barber',
    dealIncluded: true,
  },
  {
    id: 'adf6a98e-ae4e-45e3-bc9d-9121af035b65',
    available: false,
    name: 'Mckee',
    dealIncluded: false,
  },
  {
    id: '7e6a2ce7-1cd8-448e-8a09-0182bb5397af',
    available: false,
    name: 'Susanna',
    dealIncluded: false,
  },
  {
    id: 'e7940336-5448-4e19-972e-51cef5373c7c',
    available: true,
    name: 'Mcleod',
    dealIncluded: false,
  },
];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    // wrap in delayed observable to simulate server api call
    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        // for user stuff
        case url.endsWith('/users/authenticate') && method === 'POST':
          return authenticate();
        case url.endsWith('/users/register') && method === 'POST':
          return register();
        case url.endsWith('/users') && method === 'GET':
          return getUsers();
        case url.match(/\/users\/\d+$/) && method === 'GET':
          return getUserById('1');
        case url.match(/\/users\/\d+$/) && method === 'PUT':
          return updateUser('1');
        case url.match(/\/users\/\d+$/) && method === 'DELETE':
          return deleteUser('1');
        case url.endsWith('/products') && method === 'GET':
          return loadProducts();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    // route functions

    function authenticate() {
      const { username, password } = body;
      const user = users.find(
        (x) => x.username === username && x.password === password
      );
      if (!user) return error('Username or password is incorrect');
      return ok({
        id: user.id,
        username: user.username,
        token: 'fake-jwt-token',
      });
    }

    function register() {
      const user = body;

      if (users.find((x) => x.username === user.username)) {
        return error('Username "' + user.username + '" is already taken');
      }
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      return ok();
    }

    function getUsers() {
      if (!isLoggedIn()) return unauthorized();
      return ok(users);
    }

    function getUserById(id: string) {
      if (!isLoggedIn()) return unauthorized();

      const user = users.find((x) => x.id === id);
      return ok(user);
    }

    function updateUser(id: string) {
      if (!isLoggedIn()) return unauthorized();

      let params = body;
      let user = users.find((x) => x.id === id);

      // only update password if entered
      if (!params.password) {
        delete params.password;
      }

      // update and save user
      Object.assign(user, params);
      localStorage.setItem('users', JSON.stringify(users));

      return ok();
    }

    function deleteUser(id: string) {
      if (!isLoggedIn()) return unauthorized();

      users = users.filter((x) => x.id !== id);
      localStorage.setItem('users', JSON.stringify(users));
      return ok();
    }

    // helper functions

    function ok(body?: any) {
      return of(new HttpResponse({ status: 200, body }));
    }

    function error(message: string) {
      return throwError({ error: { message } });
    }

    function unauthorized() {
      return throwError({ status: 401, error: { message: 'Unauthorised' } });
    }

    function isLoggedIn() {
      return headers.get('Authorization') === 'Bearer fake-jwt-token';
    }

    function idFromUrl() {
      const urlParts = url.split('/');
      return parseInt(urlParts[urlParts.length - 1]);
    }
    function loadProducts() {
      return ok(products);
    }
  }
}

export const fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true,
};
