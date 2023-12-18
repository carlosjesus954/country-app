import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/Country';
import { countryService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.scss']
})
export class ByRegionPageComponent implements OnInit {

  public countries : Country[] = []
  public selectedRegion?: Region;
  public regions : Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

  constructor(private countryService : countryService){}

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byRegion.countries
    this.selectedRegion = this.countryService.cacheStore.byRegion.region

  }

  searchByRegion (term : Region):void{
    this.selectedRegion = term
    this.countryService.searchRegion(term).subscribe( region => {
    this.countries = region
  })

  }
}
