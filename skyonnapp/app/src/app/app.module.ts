import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './notes/notes.component';
import { VirtualScrollModule } from 'angular2-virtual-scroll';
import { TitleComponent } from './title/title.component';
import { NotesformComponent } from './notes/notesform/notesform.component';
import { ServicesService } from './service/services.service';
import { searchPipe } from './service/search';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    TitleComponent,
    NotesformComponent,
    searchPipe

  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule, HttpClientModule, VirtualScrollModule, InfiniteScrollModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
