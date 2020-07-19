import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()

export class AuthInterceptor implements HttpInterceptor{
    constructor(private router: Router ,
                private toastr: ToastrService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.headers.get('No-Auth') === 'true') {
            return next.handle(req.clone());
        }
        if(localStorage.getItem('usertoken') != null){
            const clonereq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('usertoken'))
            });
            return next.handle(clonereq).pipe(tap(
                (err: any) => {
                    if (err instanceof HttpErrorResponse) {
                        if (err.status === 401) {
                          this.router.navigate(['/login']);
                        }
                      }
                }
            ));
        }
        else{
            this.router.navigateByUrl('');
        }
    }
}
