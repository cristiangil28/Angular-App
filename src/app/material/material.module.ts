import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDemoComponent } from './material-demo/material-demo.component';
import {MatToolbarModule,MatButtonModule,MatIconModule,MatExpansionModule} from '@angular/material';
import { MaterialButtonComponent } from './material-button/material-button.component';
@NgModule({
  declarations: [MaterialDemoComponent, MaterialButtonComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule
  ],
  //en los exports permite usar los módulos en el proyecto
  exports:[
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule
  ],
})
export class MaterialModule { }
