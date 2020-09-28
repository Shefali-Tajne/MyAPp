import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes, ROUTES } from '@angular/router';

import { ContactPipe } from './contact.pipe';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
const routes: Routes = [
   { path: 'home', component: HomeComponent },
   // {path: '', redirectTo:'home'},
   
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
 
    ContactPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
