import { FieldValidation } from '../../shared/validators/validations.interface';

export const loginValidationConfig: FieldValidation[] = [
  {
    name: 'tipoDocumento',
    rules: [
      { type: 'required', message: 'El tipo de identificación es obligatorio.' },
    ],
  },  
  {
    name: 'numeroDocumento',
    rules: [
      { type: 'required', message: 'Ingrese su documento.' },
      { type: 'pattern', value: 'onlyNumbers', message: 'Solo debe contener números.' },
      { type: 'min', value: 1 , message: 'Debe ser mayor a 0.' },
    ],
  },
  {
    name: 'fechaNacimiento',
    rules: [
      { type: 'required', message: 'La fecha es obligatoria.' },
    ],
  },
];


