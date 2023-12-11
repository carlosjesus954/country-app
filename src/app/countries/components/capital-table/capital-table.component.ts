import { Component, Input } from '@angular/core';
import { Capital } from '../../interfaces/Capital';


@Component({
  selector: 'app-capital-table',
  templateUrl: './capital-table.component.html',
  styleUrls: ['./capital-table.component.scss']
})
export class CapitalTableComponent {
  @Input()
  public capitals : Capital[] = []
}
