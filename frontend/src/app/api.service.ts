import { Injectable } from '@angular/core';
import { Configuration } from './configuration';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private config: Configuration) { }
}
