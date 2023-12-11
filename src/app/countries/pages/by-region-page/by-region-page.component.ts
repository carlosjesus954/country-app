import { Component } from '@angular/core';
import { Country } from '../../interfaces/Country';
import { countryService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.scss']
})
export class ByRegionPageComponent {
  constructor(private countryService : countryService){}
  public countries : Country[] = []

  searchByRegion (term : string):void{
   this.countryService.searchRegion(term).subscribe( region => {
    this.countries = region
   })

  }
}
