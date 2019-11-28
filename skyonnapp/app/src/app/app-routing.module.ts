import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { TitleComponent } from './title/title.component';
import { NotesformComponent } from './notes/notesform/notesform.component';



const routes: Routes = [
  { path: '', component: NotesformComponent },
  { path: 'title', component: TitleComponent },
  { path: 'title/:id', component: NotesComponent },
  { path: 'edit', component: NotesComponent },
  { path: 'edit/:id', component: NotesComponent },
  { path: 'notesForm', component: NotesformComponent }, 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
