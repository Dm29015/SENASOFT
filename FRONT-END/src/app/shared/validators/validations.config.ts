import { ModuleValidationConfig } from './validations.interface';

import { loginValidationConfig} from '../../views/login/login.validations';


export const validationsConfig: ModuleValidationConfig = {
  login: loginValidationConfig
};
