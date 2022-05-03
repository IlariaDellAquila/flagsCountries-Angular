import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Country } from 'src/app/Interfaces/country';
import { ServiceService } from 'src/app/Services/service.service';



@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  @Input('c') country: Country | undefined;
  @Output('eventoCustom') scatenaEvento = new EventEmitter();

  countries: Country[] = [];

  constructor() { }

  ngOnInit(): void {

  }

 scatenaEventoCustom(url: string | undefined){
   this.scatenaEvento.emit(url);
 }

}
