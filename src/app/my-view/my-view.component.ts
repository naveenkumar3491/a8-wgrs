import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-my-view',
  templateUrl: './my-view.component.html',
  styleUrls: ['./my-view.component.scss']
})
export class MyViewComponent implements OnInit {
isShowSearchFilter = true;
columnDefs = [
    {headerName: 'CLIP ID', field: 'clipId', resizable: true, sortable: true },
    {headerName: 'REC ST', field: 'recordStatusCode' },
    {headerName: 'INDX DT', field: 'indexedDate' },
    {headerName: 'SITE ID', field: 'siteId'},
    {headerName: 'LIEN ID', field: 'liend'},
    {headerName: 'FIRST NAME', field: 'firstName' },
    {headerName: 'LAST NAME', field: 'lastName'},
    {headerName: 'PRIORITY', field: 'slaType'},
    {headerName: 'SSN', field: 'ssnMasked'},
    {headerName: 'CASE ID', field: 'caseId'},
];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    
  }
}
