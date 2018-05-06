import {NgModule} from '@angular/core';
import {DocumentationComponent} from './documentation/documentation.component';
import {PasswordIndicatorComponent} from './password-indicator/password-indicator.component';
import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = [
  { path: 'doc', component: DocumentationComponent},
  { path: '', component: PasswordIndicatorComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {


}
