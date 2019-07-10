import { Injectable, EventEmitter } from '@angular/core';
import { Constants } from 'src/app/shared/constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CommonService{
    private readonly userProfileUrl = Constants.basePath + Constants.MyWgrsUrl + 'getUserProfile.app';
    public showSearchFilter: EventEmitter<boolean> = new EventEmitter(false);
    public loadGridData: EventEmitter<any> = new EventEmitter();
    constructor(private http: HttpClient) { }

    public getUserProfile(): Observable<any> {
        return this.http.get(`${this.userProfileUrl}`).pipe(map(data => {

            return data;
        }))
    }
}