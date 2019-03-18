import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.css']
})
export class MaterialInputComponent implements OnInit {

  usuario={
    nombre:'Luis'
  };

  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.usuario.nombre='david';
    }),6000;
  }

}
