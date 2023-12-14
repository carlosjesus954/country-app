import { Component, Input, Output,EventEmitter, OnInit, OnDestroy  } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit, OnDestroy{
  
  
  private debouncer : Subject<string> = new Subject <string>();
  private debouncerSuscription? : Subscription;
  @Input()
  placeHolder : string = '';

  @Output() onValue = new EventEmitter<string>();
  @Output() onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
    .pipe(
      debounceTime(400)
    )
    .subscribe(value => {
      this.onDebounce.emit(value)
    })
  }
  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe()
  }
  realizarBusqueda( value : string ){
    console.log('Busqueda exitosa')
    this.onValue.emit(value)
  }
  onKeyPress ( searchTerms : string){
    this.debouncer.next(searchTerms)
  }
}
