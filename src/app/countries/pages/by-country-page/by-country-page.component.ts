import { Component } from '@angular/core';
import { countryService } from '../../services/countries.service';
import {Country} from '../../interfaces/Country';
@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.scss']
})
export class ByCountryPageComponent {
  constructor(private countryService : countryService){}
  public countries : Country[]= []
  searchByCountry (term : string):void{
    this.countryService.searchCountry(term).subscribe( countries => {
     this.countries = countries
     console.log('Countries en by Country',this.countries)
    })
 
   }
}
