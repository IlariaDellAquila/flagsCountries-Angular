import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input('options') options : any[] | undefined;
  @Input('defaultText') defaultText : string | undefined;
  @Output('change') changeValue = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
 
  onChangeValue(event:any){
    event.preventDefault();
    event.stopPropagation();
   this.changeValue.emit(event.target.value)
  } 
}
