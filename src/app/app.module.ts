import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabHeadingComponent } from './components/tab-heading/tab-heading.component';
import { VerticalTabHeadingComponent } from './components/vertical-tab-heading/vertical-tab-heading.component';

@NgModule({
  declarations: [
    AppComponent,
    TabHeadingComponent,
    VerticalTabHeadingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
