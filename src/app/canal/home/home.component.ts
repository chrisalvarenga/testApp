import { Component, OnInit } from '@angular/core';
import { Canal } from './models/canal';
import { TestServiceService } from '../../services/test-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  telefono = '';
  msg = '';
  monto = 0;
  data:any = [];
  constructor(
    private canalService: TestServiceService
  ) { }

  ngOnInit(): void {
  }

  not(): void{
    const canal = new Canal(this.telefono, this.msg);
    const clave = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    const gestion = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    const consumo = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    const dias = 1000 * 60 * 60 * 24 * 15;
    const fecha = Date.now() + dias;

    if(consumo>150){
      this.monto = consumo * 6;
    }
    if(consumo<=150){
      this.monto = consumo * 2;
    }
    //en caso de simular el llamado  obtener el result
    const result = (Math.random() + 1).toString(36);
    console.log('result: ',result);
    
    this.data.push({telefono:this.telefono, mensaje:this.msg, clave: clave, gestion: gestion, consumo: consumo, fecha: fecha, monto: this.monto});
    console.log(this.data);

    this.canalService.send(canal).subscribe(
      response => {
        //aqui se puede obtener el result en caso de llamar al API
        console.log(response);
      }
    )
    
  }

  fecha(): void{
    console.log('click');
  }

}
