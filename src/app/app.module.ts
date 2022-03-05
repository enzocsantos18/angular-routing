import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NumbersComponent } from './numbers/numbers.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: AboutComponent },
  { path: 'tabuada', component: NumbersComponent },
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    AboutComponent,
    NumbersComponent,
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
