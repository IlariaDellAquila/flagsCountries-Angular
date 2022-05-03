import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {

  @Output('testo') scrittuta = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }

  scatenoInput(evento:any){
    this.scrittuta.emit(evento.target.value);
  }


}
