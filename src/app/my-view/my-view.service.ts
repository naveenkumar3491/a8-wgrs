import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Ng2Storage } from '../shared/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Constants } from 'src/app/shared/constants';

@Injectable()
export class MyViewService{
    
    private readonly getLienUrl = Constants.basePath + Constants.MyWgrsUrl + 'lienWebService/getLien';
    public lienStorageData = [];

    constructor(private http: HttpClient, private storage: Ng2Storage) { }

    public getLienDetails(obj: any): Observable<any> {
        return this.http.post(`${this.getLienUrl}`, obj).pipe(map(data => {
            this.checkLienExistence(data);

            return data;
        }))
    }

    private checkLienExistence(data){
        this.lienStorageData = JSON.parse(this.storage.getLocalStorage('lienData'));
        if(this.lienStorageData && this.lienStorageData.length > 0){
            const indexFound = this.lienStorageData.findIndex(obj => obj.lienId === data.lienId);
            if(indexFound === -1){
                this.lienStorageData.push(data);
                this.storage.setLocalStorage('lienData', JSON.stringify(this.lienStorageData));
            }
        }else{
            this.lienStorageData = [];
            this.lienStorageData.push(data);
            this.storage.setLocalStorage('lienData', JSON.stringify(this.lienStorageData));
        }
    }
}