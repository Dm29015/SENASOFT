import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../enviroment/enviroment'; 
import {testResultModel} from '../test-result/testResult.models'
@Injectable({
  providedIn: 'root'
})
export class DetailServiceService {
  
}
