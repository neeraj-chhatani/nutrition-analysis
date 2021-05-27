import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Constants } from './constants';
import { Observable } from 'rxjs';

@Injectable()
export class QueryParameterInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let params = request.params;
    let newUrl = request.url;
    params = params.append('app_id', Constants.app_id);
    params = params.append('app_key', Constants.app_key);
    return next.handle(request.clone({ url: newUrl, params }));
  }
}
