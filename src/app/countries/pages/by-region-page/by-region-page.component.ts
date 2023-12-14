import { Component } from '@angular/core';
import { Country } from '../../interfaces/Country';
import { countryService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.scss']
})
export class ByRegionPageComponent {
  constructor(private countryService : countryService){}
  public countries : Country[] = []
  public selectedRegion?: Region;
  public regions : Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  searchByRegion (term : Region):void{
    this.selectedRegion = term
   this.countryService.searchRegion(term).subscribe( region => {
    this.countries = region
   })

  }
}
