import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from "@angular/forms";
import { SearchFilterService } from './search-fliter.service';
import { CommonService } from '../../shared/common.service';

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
  constructor(private formBuilder: FormBuilder, private searchFilterService: SearchFilterService, private commonService: CommonService) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      siteId: [''],
      lienId: [''],
      firstName: [''],
      lastName: [''],
      ssn: [''],
      caseId: [''],
      lienType: [''],
      lienSubType: [''],
      wrokFlowStatus: [''],
      recordStatus: [''],
      updatedBy: [''],
      associateId: [''],
      priority: [''],
      courtOrderState: [''],
      originalOrCopy: [''],
      deleteType: [''],
      eiwoRecords: [''],
      interrogatory: [''],
      indexedForm: [''],
      indexedTill: [''],
      deleteFrom: [''],
      deleteTill: [''],
      releaseOrder: [''],
      needInfo: [''],
      branchCode: [''],
      companyCode: [''],
      payrollFileNumber: [''],
      adpEmployeeIdentifier: [''],
      deleteCommentCode: [''],
      userId: ['']
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.searchForm.invalid) {
      this.loading = false;
      return;
    }
    this.searchFilterService.getGridData(this.searchForm.value).subscribe(data => {
      this.commonService.loadGridData.emit(data.data);
      this.commonService.showSearchFilter.emit(false);
    })
  }

}
