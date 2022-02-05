import { HttpHeaders } from '@angular/common/http';
//E ele tem o objetivo de interceptar toda requisição http que sai do nosso front-end e assim nós podemos manipular a requisição antes de ela ir para o servidor.

import { Injectable } from '@angular/core';

import { TokenService } from './token.service';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class AutenticacaoInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.tokenService.possuiToken()) {
      const token = this.tokenService.retornaToken();
      const headers = new HttpHeaders().append('x-access-token', token);
      request = request.clone({headers});
    }

    return next.handle(request);
  }
}
