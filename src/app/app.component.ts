import { Component, OnInit } from '@angular/core';
import { Country } from './Interfaces/country';
import { ServiceService } from './Services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CountryAngular';

  countries: Country[] = [];
  loader: boolean = false;
  options: object[]= [{value:'au', text:'Africa'},{value:'usan', text:'America'},{value:'aesean', text:'Asia'},{value:'eu', text:'Europa'},{value:'au', text:'Oceania'},]


  constructor(private service: ServiceService) { }

  ngOnInit(): void {
   this.caricaBandiere()
  }

  caricaBandiere(){
    this.loader = true;
    this.service.getAll().subscribe((data: any) => {
      this.loader = false;
      this.countries = data;
    })
  }

  loggaEvento(infoEvento: any) {
    console.log(`HO CLICCATO! ${infoEvento}`)
  }

  intercetto(value: any) {
    this.loader = true;
    if (value.length > 2) {
      this.service.getByName(value).subscribe((data: any) => {
        this.loader = false;
        this.countries = data;
      },
        (error: any) => {
          this.countries = [];
        }
      )
    }else if(value.length === 0){
     this.caricaBandiere();
    }
  }

  changeRegion(value:any){
   this.service.getByRegion(value).subscribe((data:any) =>{
     this.countries = data;
   })
  }
}
