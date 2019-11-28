import { Component, OnInit } from '@angular/core';
import { Users } from '../models/notes';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../service/services.service';
import { TitleComponent } from '../title/title.component';

@Component({
  providers: [TitleComponent],
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  Users: Users
  id: any;
  hideSubmit:boolean=false;
  constructor(private acr: ActivatedRoute, private service: ServicesService, private router: Router, private user: TitleComponent) { }

  ngOnInit() {
    this.id = this.acr.snapshot.params.id
    console.log(this.id)

    if(this.id!=undefined)
    {

      this.hideSubmit=true
    }
    // else{
    this.service.get1(this.id).subscribe((data) => {
      this.Users = data
    })
  // }
}

  edit() {

    this.Users.time=new Date().getHours() + ':' + new Date().getMinutes() + ':'+  new Date().getSeconds();
    this.Users.date=new Date().getMonth()+"-"+new Date().getDate()+"-"+ new Date().getFullYear();
    console.log(this.Users.date)

    this.service.edit(this.id, this.Users).subscribe((data) => {
      this.Users = data
      this.router.navigate(['notesForm'])
      this.user.ngOnInit();
    })
  }

  update()
  {
    console.log(this.hideSubmit)
    console.log(this.Users);
    console.log(new Date().getMonth());
    
    this.Users.date=new Date().getMonth()+"-"+new Date().getDate()+"-"+ new Date().getFullYear();
    console.log(this.Users.date)

    if(this.hideSubmit==true)
    {
      this.Users.time=new Date().getHours() + ':' + new Date().getMinutes() + ':'+  new Date().getSeconds()

      this.service.edit(this.id, this.Users).subscribe((data) => {
        this.Users = data
        // this.router.navigate(['notesForm'])
        // this.user.ngOnInit();
      })
    }

  }
}