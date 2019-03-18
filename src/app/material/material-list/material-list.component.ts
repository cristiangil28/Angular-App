import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/shared/model/estudiante';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {
  estudiante1:Estudiante;
  estudiante2:Estudiante;
  estudiante3:Estudiante;

  ListaEstudiantes:Estudiante[];
  constructor() { }

  ngOnInit() {
    console.log('inicializando el componente Material List');
    this.estudiante1={
      id:1,
      nombre:'cristian',
      ciudad:'bogotá'
    };
    this.estudiante2={
      id:2,
      nombre:'david',
      ciudad:'brasilia'
    };
    this.estudiante3={
      id:3,
      nombre:'maria',
      ciudad:'buenos aires'
    };

    this.ListaEstudiantes=[this.estudiante1, this.estudiante2,this.estudiante3];
  }
  onMouseClick($event:Estudiante){
    console.log('Click On: ',$event.nombre);
  }

}
