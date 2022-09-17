import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatTabsModule } from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatExpansionModule, CdkAccordionModule, MatTabsModule,MatCardModule

  ],
  exports: [MatExpansionModule, CdkAccordionModule, MatTabsModule,MatCardModule]
})
export class SharedModule { }
