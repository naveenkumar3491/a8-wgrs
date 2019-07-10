import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SearchFilterService {

  constructor(private http: HttpClient) { }

  public getGridData(formData) : Observable<any>{
    let jsonBody = {
      pageStartIndex: "0",
      getLiensFromGSISalso: "true",
      loggedInUser: 'fn100',
      queryParameters: {
        'order.siteId':formData.siteId, 
        lienId: null,
        'employee.firstName': formData.firstName,
        'employee.lastName': formData.lastName,
        irCaseId: formData.irCaseId,
        lienTypeCd: formData.lienTypeCd,
        'employee.ssn': formData.ssn,
        lienPriorityCd: null,
        'workflow.workflowStatusCode': null,
        recordStatusCode: null,
      }
    }
    let tempObj: any = {} ;

    for(var obj in jsonBody.queryParameters) {
      if(jsonBody.queryParameters[obj] && jsonBody.queryParameters[obj].length >0) {
          tempObj[obj] = jsonBody.queryParameters[obj];
      }
    }
    jsonBody.queryParameters = tempObj;
    console.log(tempObj);   
    return this.http.post('https://avsintra-stg.avs.oneadp.com/WGSUI/services/lienWebService/liensearch', jsonBody);
  }

}