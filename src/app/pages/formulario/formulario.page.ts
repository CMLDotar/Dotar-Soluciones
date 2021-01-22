import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
  
  fechaNaci: Date = new Date();
  
  customPickerOptions = {
  
    buttons: [
      {
        text: 'Aceptar'
      },
      {
        text: 'Cancelar'
      }
    ]
  
  }

  usuario ={
    correo: "",
    contrasenia: "",
    rContrasenia: "",
    dni:"",
    apellido:"",
    nombre:"",
    nUsuario:""
  }

  constructor() { }

  ngOnInit() {
  }

  cambioFecha(event){
    console.log(event);
    console.log( new Date(event.detail.value));
  }
  onKeyPress(event) {
    if ((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122) || event.keyCode == 32 || event.keyCode == 46) {
        return true
    }
    else {
        return false
    }

  }
  crear() {
    console.log(this.usuario);
    
  }

}