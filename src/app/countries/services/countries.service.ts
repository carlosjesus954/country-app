import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/Country';

@Injectable({providedIn: 'root'})
export class countryService{
  
    private apiUrl : string = 'https://restcountries.com/v3.1'
    constructor(private http: HttpClient) { }
    searchCapital(term : string) : Observable<Country[]> {
        return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`)
        .pipe(
            // Lo que hace es coger el error y con el of([]) nos devuelve el observable de country vacio
            catchError( error => of([]))
        )
    }
    
}