import { Injectable } from '@angular/core';
import { Constants } from 'src/app/shared/constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CommonService{
    private readonly userProfileUrl = Constants.basePath + Constants.MyWgrsUrl + 'getUserProfile';

    constructor(private http: HttpClient) { }

    public loginUser(): Observable<any> {
        return Observable.create(observer => {
            setTimeout(() => {
               const userObj = JSON.parse(localStorage.getItem('userObj'));
                observer.next(userObj);
                observer.complete();
            }, 1000)
        });
    }
}