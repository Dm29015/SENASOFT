import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { faCalendar, faHeart } from '@fortawesome/free-solid-svg-icons';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';

interface DocType {
  name: string;
  code: string;
}

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

  loginForm: FormGroup;
  faHeart = faHeart;
  faCalendar = faCalendar;
  docTypes: DocType[] | undefined;
  selectedIdType: DocType | undefined;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      idType: ['', Validators.required],
      idNumber: ['', Validators.required],
      birthDate: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.docTypes = [
      { code: 'CC', name: 'Cédula de Ciudadanía' },
      { code: 'TI', name: 'Tarjeta de Identidad' },
      { code: 'CE', name: 'Cédula de Extranjería' },
      { code: 'PA', name: 'Pasaporte' },
    ]
  }
  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }
}