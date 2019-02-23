import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatalistService } from 'src/app/datalist.service';
import { QuestionComponent } from './question/question.component';
import { ContentMenuComponent } from './content-menu/content-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    ContentMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [DatalistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
