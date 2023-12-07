import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/Country';

@Injectable({providedIn: 'root'})
export class countryService{
  
    private apiUrl : string = 'https://restcountries.com/v3.1'
    constructor(private http: HttpClient) { }
    searchCapital(term : string) : Observable<Country[]> {
        return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`)
    }
    
}