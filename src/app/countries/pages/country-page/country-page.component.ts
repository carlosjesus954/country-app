import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { countryService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/Country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss']
})
export class CountryPageComponent implements OnInit{
  public country? : Country[];
  constructor(private activateRoute : ActivatedRoute,
    private countriesService : countryService,
    private router : Router,
    ){}
  ngOnInit(): void {
    this.activateRoute.params
    .pipe(
      switchMap(({id}) => this.countriesService.searchCountryByAlphaCode(id)),
    )
    .subscribe( country => {
      console.log(country)
      if (country.length === 0) return this.router.navigateByUrl('')

      return this.country = country
      // return
      
    } )
  }
 
}
