import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';
// import { DropdownModule } from 'primeng/dropdown';
// import { AlertsService } from '../../shared/alerts/alerts.service';

import { SHARED_IMPORTS } from '../../shared/shared-imports';
import { CRUDComponent } from '../../shared/crud/crud.component';
import { SharedModule } from 'primeng/api';
import { TestResultServiceService } from '../test-result/test-result-service.service';
import { TableModule } from 'primeng/table';


import {testResultModel} from '../test-result/testResult.models';

@Component({
  selector: 'app-detail-results',
  standalone: true,
  imports: [
    SharedModule,
    CRUDComponent,
    TableModule
  ],
  templateUrl: './detail-results.component.html',
  styleUrl: './detail-results.component.css'
})
export class DetailResultsComponent implements OnInit {


  constructor(
    private resultTest: TestResultServiceService 
  ){}

  order: testResultModel[]=[]
  fieldOrder: testResultModel[]=[]


  

  

  loadResultOrder() {
    this.resultTest.getAllResultsOrder().subscribe(data => {
      this.order = data
      
    },
    );
  }



  ngOnInit(){
      this.loadResultOrder()
  }


  // filterGlobal(event: any) {
  //   this.dt1.filterGlobal(event.target.value, 'contains');
  // }

}
