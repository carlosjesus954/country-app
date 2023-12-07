import { Component, Input, Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  @Input()
  placeHolder : string = '';

  @Output() onValue = new EventEmitter<string>();

  realizarBusqueda( value : string ){
    console.log('Busqueda exitosa')
    this.onValue.emit(value)
  }
}
