import { Component, OnInit } from '@angular/core';
import { countryService } from '../../services/countries.service';
import {Country} from '../../interfaces/Country';
@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.scss']
})
export class ByCountryPageComponent implements OnInit {
  constructor(private countryService : countryService){}
  
  public countries : Country[]= []
  public initialValue: string = ''

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCountries.countries
    this.initialValue = this.countryService.cacheStore.byCountries.term
  }
  searchByCountry (term : string):void{
    this.countryService.searchCountry(term).subscribe( countries => {
     this.countries = countries
     console.log('Countries en by Country',this.countries)
    })
 
   }
}
