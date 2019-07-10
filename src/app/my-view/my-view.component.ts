import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-my-view',
  templateUrl: './my-view.component.html',
  styleUrls: ['./my-view.component.scss']
})
export class MyViewComponent implements OnInit {
  showSearchFilter = false;
  rowData = [];
  columnDefs = [
    { headerName: 'CLIP ID', field: 'clipId', resizable: true, sortable: true },
    { headerName: 'REC ST', field: 'recordStatusCode' },
    { headerName: 'INDX DT', field: 'indexedDate' },
    { headerName: 'SITE ID', field: 'siteId' },
    { headerName: 'LIEN ID', field: 'liend' },
    { headerName: 'FIRST NAME', field: 'firstName' },
    { headerName: 'LAST NAME', field: 'lastName' },
    { headerName: 'PRIORITY', field: 'slaType' },
    { headerName: 'SSN', field: 'ssnMasked' },
    { headerName: 'CASE ID', field: 'caseId' },
  ];
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.showSearchFilter.subscribe(data => {
      this.showSearchFilter = data;
    })
    this.commonService.loadGridData.subscribe(data => {
      this.rowData = data;
    })
  }

  onRowDoubleClicked($event:  any) {
    // this.router.navigate(['/lien-view', { queryParams: { lienId: $event.data.lienId } }]); 
    this.router.navigate(['lien-view', { lienId: $event.data.lienId }]);
  }
}