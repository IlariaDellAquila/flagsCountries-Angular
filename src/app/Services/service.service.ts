import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../Interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private _http : HttpClient) { }

  getAll(){
  return this._http.get('https://restcountries.com/v2/all');
  }
  
  getByName(name: Country){
    return this._http.get('https://restcountries.com/v2/name/' + name)
  }

  getByRegion(regionalBlocs:string){
    return this._http.get('https://restcountries.com/v2/regionalbloc/' + regionalBlocs)
  }
}
