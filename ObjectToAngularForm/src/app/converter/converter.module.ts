import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConverterComponent } from './converter.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ConverterComponent
  ],
  imports: [
    CommonModule,SharedModule
  ],
  exports:[ConverterComponent]
})
export class ConverterModule { }
