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
import { AuthService } from '../../auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { ValidationService } from '../../shared/validators/validations.service';


declare var grecaptcha: any;

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

  captchaResponse: string | null = null;

  loginForm: FormGroup;
  faHeart = faHeart;
  faCalendar = faCalendar;
  typesId: TypeIdentification[] = [];
  selectedIdType: TypeIdentification | undefined;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private typeIdService: TypeIdentificationService,
    private authService: AuthService,
    private toastr: ToastrService,
    private validationService: ValidationService,
  ) {
    this.loginForm = this.fb.group({
      tipoDocumento: ['', validationService.getValidatorsForField("login", "tipoDocumento")],
      numeroDocumento: ['', validationService.getValidatorsForField("login", "numeroDocumento")],
      fechaNacimiento: ['', validationService.getValidatorsForField("login", "fechaNacimiento")]
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.loginForm.get(fieldName);
    return !!(field?.invalid && (field.touched || field.dirty));
  }  

  getErrorMessage(fieldName: string): string {
    const control = this.loginForm.get(fieldName);
    if (control?.errors) {
      const errorKey = Object.keys(control.errors)[0];
      return this.validationService.getErrorMessage('login', fieldName, errorKey);
    }
    return '';
  }

  private markFormFieldsAsTouched() {
    Object.values(this.loginForm.controls).forEach(control => control.markAsTouched());
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

  // Método que se activa al enviar el formulario
  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Formulario válido:', this.loginForm.value);
      // Realizar la lógica de envío
    } else {
      console.log('Formulario inválido');
      this.markFormFieldsAsTouched(); // Marca todos los campos como tocados para mostrar los errores
    }


    if (grecaptcha.getResponse() === '') {
      this.toastr.warning('Por favor, completa el CAPTCHA');
    } else {
      this.captchaResponse = grecaptcha.getResponse();
      this.login();
    }
  }

  login(): void {
    if (this.loginForm.valid) {
      const formValue = this.loginForm.value;
      const loginData = {
        tipoDocumento: formValue.tipoDocumento.id, // Asegurándonos de enviar solo el ID
        numeroDocumento: formValue.numeroDocumento,
        fechaNacimiento: formValue.fechaNacimiento.toISOString().split('T')[0], // Formato de fecha adecuado
        recaptcha: this.captchaResponse
      };

      console.log(loginData)
      this.loginService.login(loginData);
    }
  };

}
