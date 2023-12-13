import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable, catchError, map, of, tap } from 'rxjs';
import { Capital } from '../interfaces/Capital';
import { Country } from '../interfaces/Country';

@Injectable({providedIn: 'root'})
export class countryService{
  
    private apiUrl : string = 'https://restcountries.com/v3.1';

    constructor(private http: HttpClient) { }

    searchCountryByAlphaCode( code : string ) : Observable<Country[]> {
        return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`)
        .pipe(
            map( countries => countries.length > 0 ? [countries[0]] : []),
            catchError( error => of([]))
        )
    }
    
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