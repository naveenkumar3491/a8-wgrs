import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Ng2Storage } from '../shared/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class MyViewService{

    private readonly basePath = 'http://avsintra-stg.avs.oneadp.com';
    private readonly MyWgrsUrl = '/WGSUI/services/';
    private readonly userLoginUrl = this.getBaseURI() + 'lienWebService/getLien';
    public lienStorageData = [];
    private getBaseURI() {
        return this.basePath + this.MyWgrsUrl;
    }

    constructor(private http: HttpClient, private storage: Ng2Storage) { }

    public getLienDetails(obj: any): Observable<any> {
        return this.http.post(`${this.userLoginUrl}`, obj).pipe(map(data => {
            this.checkLienExistence(data);

            return data;
        }))
    }

    private checkLienExistence(data){
        this.lienStorageData = JSON.parse(this.storage.getSession('lienData'));
        if(this.lienStorageData && this.lienStorageData.length > 0){
            const indexFound = this.lienStorageData.findIndex(obj => obj.lienId === data.lienId);
            if(indexFound === -1){
                this.lienStorageData.push(data);
                this.storage.setSession('lienData', JSON.stringify(this.lienStorageData));
            }
        }else{
            this.lienStorageData = [];
            this.lienStorageData.push(data);
            this.storage.setSession('lienData', JSON.stringify(this.lienStorageData));
        }
    }
}