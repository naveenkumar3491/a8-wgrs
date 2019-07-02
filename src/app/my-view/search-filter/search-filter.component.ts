import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {
  searchForm: FormGroup;
  submitted = false;
  loading = false;
  isAdvancedSearch = false;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      siteId:[''],
      lienId:[''],
      firstName:[''],
      lastName:[''],
      ssn:[''],
      caseId:[''],
      lienType:[''],
      lienSubType:[''],
      wrokFlowStatus:[''],
      recordStatus:[''],
      updatedBy:[''],
      associateId:[''],
      priority:[''],
      courtOrderState:[''],
      originalOrCopy:[''],
      deleteType:[''],
      eiwoRecords:[''],
      interrogatory:[''],
      indexedForm:[''],
      indexedTill:[''],
      deleteFrom:[''],
      deleteTill:[''],
      releaseOrder:[''],
      needInfo:[''],
      branchCode:[''],
      companyCode:[''],
      payrollFileNumber:[''],
      adpEmployeeIdentifier:[''],
      deleteCommentCode:[''],
      userId:['']
    });
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    if (this.searchForm.invalid) {
      this.loading = false;
      return;
    }
    this.getGridData(this.searchForm);
  }

  getGridData(value: any){
    let jsonBody = {
      pageStartIndex: "0",
      getLiensFromGSISalso: "true",
      loggedInUser : 'fn100',
      queryParameters: {
        lienSearchInd: 'Y',
       }
    }
    // this.http.post('https://avsintra-fit1.avs.oneadp.com/WGSUI/services/lienWebService/liensearch',jsonBody).subscribe((data) => {
    //   console.log(data);
    // });
  }

  advancedSearch() {
    this.isAdvancedSearch = !this.isAdvancedSearch;
  }

}
