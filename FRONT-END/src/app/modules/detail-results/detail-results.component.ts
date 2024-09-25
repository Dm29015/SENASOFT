import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';
// import { DropdownModule } from 'primeng/dropdown';
// import { AlertsService } from '../../shared/alerts/alerts.service';

import { SHARED_IMPORTS } from '../../shared/shared-imports';
import { CRUDComponent } from '../../shared/crud/crud.component';
import { SharedModule } from 'primeng/api';
import { TestResultServiceService } from '../test-result/test-result-service.service';

import {testResultModel} from '../test-result/testResult.models';

@Component({
  selector: 'app-detail-results',
  standalone: true,
  imports: [
    SharedModule,
    CRUDComponent
  ],
  templateUrl: './detail-results.component.html',
  styleUrl: './detail-results.component.css'
})
export class DetailResultsComponent implements OnInit {


  constructor(
    private resultTest: TestResultServiceService 
  ){}

  order: testResultModel[]=[]
  filteredOrder: testResultModel[]=[]

  colums: { field: string, header: string }[] = [
    { field: 'id', header: 'id' },
    // { field: 'idProducto', header: 'Producto' },
    { field: 'fecha', header: 'fecha' },
    { field: 'id_orden', header: 'id_orden' },

  ];

  loadResultOrder() {
    this.resultTest.getAllResultsOrder().subscribe(data => {
      this.order = data
      this.filteredOrder = data;
    },
    );
  }



  ngOnInit(): void {
      this.loadResultOrder()
  }

}
