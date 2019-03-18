import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Estudiante } from 'src/app/shared/model/estudiante';

@Component({
  selector: 'app-item-estudiante',
  templateUrl: './item-estudiante.component.html',
  styleUrls: ['./item-estudiante.component.css']
})
export class ItemEstudianteComponent implements OnInit {
  //con el @Input estamos exponiendo la propiedad estudiante para ser utilizado externamente
  @Input()
  estudiante:Estudiante;
  @Output()
  onMouseClick= new EventEmitter<Estudiante>();
  constructor() { }

  ngOnInit() {
  }
  onClick(e:Estudiante){
    this.onMouseClick.emit(e);
  }

}
