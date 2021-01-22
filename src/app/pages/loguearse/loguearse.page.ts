import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loguearse',
  templateUrl: './loguearse.page.html',
  styleUrls: ['./loguearse.page.scss'],
})
export class LoguearsePage implements OnInit {

  usuario ={
    correo: "",
    contrasenia: "",
  }

  constructor() { }

  ngOnInit() {
  }

  ingresar() {
    console.log(this.usuario);
    
  }
  

}
