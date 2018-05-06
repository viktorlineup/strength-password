import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import { DocumentationComponent } from './documentation.component';


@NgModule({
  declarations: [
    DocumentationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: []
})
export class DocumentationModule {

}
