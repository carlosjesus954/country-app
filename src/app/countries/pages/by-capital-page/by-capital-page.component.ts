import { Component } from '@angular/core';
import { countryService } from '../../services/countries.service';
import { Country } from '../../interfaces/Country';
import { Capital } from '../../interfaces/Capital';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.scss']
})
export class ByCapitalPageComponent {
  constructor(private countryService : countryService){}
  public capitals : Capital[] = []

  searchByCapital (term : string):void{
   this.countryService.searchCapital(term).subscribe( capitals => {
    this.capitals = capitals
   })

  }
}
