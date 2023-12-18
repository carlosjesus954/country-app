import { Component, OnInit } from '@angular/core';
import { countryService } from '../../services/countries.service';
import { Country } from '../../interfaces/Country';


@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.scss']
})
export class ByCapitalPageComponent implements OnInit{
  constructor(private countryService : countryService){}
  public countries : Country[] = []
  public isLoading: boolean = false
  public initialValue: string = ''

 ngOnInit(): void {
   this.countries = this.countryService.cacheStore.byCapital.countries
   this.initialValue = this.countryService.cacheStore.byCapital.term

 }
  searchByCapital (term : string):void{
    this.isLoading = true
    this.countryService.searchCapital(term).subscribe( countries => {
    this.countries = countries
    this.isLoading = false
   })

  }
  
}
