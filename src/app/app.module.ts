import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes,ActivatedRoute} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchComponent } from './component/search/search.component';
import { HomeComponent } from './component/home/home.component';
const app_routes:Routes = [
  {path: '', component: HomeComponent},
  {path: 'search/:key', component: SearchComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(app_routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
