import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { StorageService } from '../services/storage.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private _storageService: StorageService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                if (this._storageService.user)
                    this._storageService.removeUser().then(success => {
                        this._storageService.user = null;
                        console.log('signout');
                    }, (err) => {
                        console.log(err);
                    });
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}