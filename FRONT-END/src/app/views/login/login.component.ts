import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendar, faHeart } from '@fortawesome/free-solid-svg-icons';

import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';

import { LoginService } from './login.service';
import { TypeIdentification } from '../../modules/typeIdentification/typeId.model';
import { TypeIdentificationService } from '../../modules/typeIdentification/typeId.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    DropdownModule,
    FontAwesomeModule,
    CommonModule,
    ReactiveFormsModule,
    CalendarModule,
    InputTextModule,
    FloatLabelModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string = '';

  loginForm: FormGroup;
  faHeart = faHeart;
  faCalendar = faCalendar;
  typesId: TypeIdentification[] = [];
  selectedIdType: TypeIdentification | undefined;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private typeIdService: TypeIdentificationService
  ) {
    this.loginForm = this.fb.group({
      tipoDocumento: ['', Validators.required],
      numeroDocumento: ['', Validators.required],
      fechaNacimiento: ['', Validators.required]
    });
  }

  loadTypeId() {
    this.typeIdService.getAllTypeId().subscribe(data => {
      this.typesId = data.filter(t => t.estado == true);
    },
    );
  }

  ngOnInit() {
    this.loadTypeId()
  }

  onSubmit() {
  if (this.loginForm.valid) {
    const formValue = this.loginForm.value;
    const loginData = {
      tipoDocumento: formValue.tipoDocumento.id, // Asegurándonos de enviar solo el ID
      numeroDocumento: formValue.numeroDocumento,
      fechaNacimiento: formValue.fechaNacimiento.toISOString().split('T')[0] // Formato de fecha adecuado
    };

    console.log(loginData)
    this.loginService.login(loginData);
  }
}



}
