import { Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/shared-imports';
import { CRUDComponent } from '../../shared/crud/crud.component';
import { SharedModule } from 'primeng/api';
import { TableModule } from 'primeng/table';

import { PersonServiceService } from '../../modules/person/person-service.service';
import { personModel } from '../../modules/person/person.models';
import { AuthService } from '../../auth/auth.service';
import { TypeIdentificationService } from '../../modules/typeIdentification/typeId.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SHARED_IMPORTS,
    SharedModule,
    CRUDComponent,
    TableModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userData!: any;
  typesId: any[] = [];
  typeIdName: string = '';

  constructor(
    private servicePerson: PersonServiceService,
    private authService: AuthService,
    private typeIdService: TypeIdentificationService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    forkJoin({
      userData: this.authService.getUserData(),
      typesId: this.typeIdService.getAllTypeId()
    }).subscribe(({ userData, typesId }) => {
      this.typesId = typesId;
      const typeDoc = this.typesId.find(t => t.id === userData.id_tipo_doc);
      this.typeIdName = typeDoc ? typeDoc.nombre_documento : '';
      this.userData = { ...userData, nombre_doc: this.typeIdName };
    });
  }
}
