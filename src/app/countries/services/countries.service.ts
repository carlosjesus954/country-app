import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of } from 'rxjs';
import { Country } from '../interfaces/Country';
import {CacheStore} from '../interfaces/cache-store.interface';
@Injectable({providedIn: 'root'})
export class countryService{
  
    private apiUrl : string = 'https://restcountries.com/v3.1';
    public cacheStore : CacheStore = {
        byCapital: {
            term: '', countries:[]
        },
        byCountries: {
            term: '', countries:[]
        },
        byRegion: {
            region: '', countries:[]
        }
    }
    constructor(private http: HttpClient) { }


    private getCountriesRequest (url :string) : Observable<Country[]> {
        return this.http.get<Country[]>(url)
        .pipe(
            // Lo que hace es coger el error y con el of([]) nos devuelve el observable de country vacio
            catchError( error => of([])),
           
        )
    }

    searchCountryByAlphaCode( code : string ) : Observable<Country[]> {
        return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`)
        .pipe(
            map( countries => countries.length > 0 ? [countries[0]] : []),
            catchError( error => of([]))
        )
    }
    
    searchCapital(term : string) : Observable<Country[]> {
        const url = `${this.apiUrl}/capital/${term}`
        return this.getCountriesRequest(url)
    }

    searchCountry(term : string) : Observable<Country[]> {
        const url = `${this.apiUrl}/name/${term}`
       return  this.getCountriesRequest(url)
    }
    searchRegion(term : string) : Observable<Country[]> {
        const url = `${this.apiUrl}/region/${term}`
        return this.getCountriesRequest(url)
    }

    
}