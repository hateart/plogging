import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { StorageService } from '../services//storage.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private storageService: StorageService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (this.storageService.user) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.storageService.user.token}`
                }
            });
        }

        return next.handle(request);
    }
}