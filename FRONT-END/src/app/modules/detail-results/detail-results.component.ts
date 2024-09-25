import { Component, OnInit } from '@angular/core';
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
    SHARED_IMPORTS,
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
