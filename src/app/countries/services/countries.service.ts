import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { Capital } from '../interfaces/Capital';
import { Country } from '../interfaces/Country';

@Injectable({providedIn: 'root'})
export class countryService{
  
    private apiUrl : string = 'https://restcountries.com/v3.1';

    constructor(private http: HttpClient) { }
    searchCapital(term : string) : Observable<Capital[]> {
        return this.http.get<Capital[]>(`${this.apiUrl}/capital/${term}`)
        .pipe(
            // Lo que hace es coger el error y con el of([]) nos devuelve el observable de country vacio
            catchError( error => of([]))
        )
    }

    searchCountry(term : string) : Observable<Country[]> {
        return this.http.get<Country[]>(`${this.apiUrl}/name/${term}`)
        .pipe(
            // Lo que hace es coger el error y con el of([]) nos devuelve el observable de country vacio
            // tap(countries => console.log(countries)),
            catchError( error => of([]))
        )
    }
    searchRegion(term : string) : Observable<Country[]> {
        return this.http.get<Country[]>(`${this.apiUrl}/region/${term}`)
        .pipe(
            // Lo que hace es coger el error y con el of([]) nos devuelve el observable de country vacio
            catchError( error => of([]))
        )
    }

    
}