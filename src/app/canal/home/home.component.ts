import { Component, OnInit } from '@angular/core';
import { Canal } from './models/canal';

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
  constructor() { }

  ngOnInit(): void {
  }

  not(): void{
    const clave = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    const gestion = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    const consumo = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    const fecha = Date.now();
    
    if(consumo>150){
      this.monto = consumo * 6;
    }
    if(consumo<=150){
      this.monto = consumo * 2;
    }
    
    
    this.data.push({telefono:this.telefono, mensaje:this.msg, clave: clave, gestion: gestion, consumo: consumo, fecha: fecha, monto: this.monto});
    console.log(this.data);
    
  }

}
