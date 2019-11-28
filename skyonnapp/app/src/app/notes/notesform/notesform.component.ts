import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../../service/services.service';
import { Users } from '../../models/notes';

@Component({
  selector: 'app-notesform',
  templateUrl: './notesform.component.html',
  styleUrls: ['./notesform.component.css']
})
export class NotesformComponent implements OnInit {
  Users: Users
  id: any
  getusers: any;
  constructor(private acr: ActivatedRoute, private service: ServicesService, private router: Router) { 
    this.Users = new Users();
  }

  ngOnInit() {
    this.service.getByid().subscribe((data) => {
      this.getusers = data
    })
  }
  postUsers(form) {
    if (form) {
      alert(".ts")
      console.log("==>0",form);
      
      this.service.postUsers(this.Users).subscribe((data) => {
        console.log("==>1",  this.service.postUsers);
        this.router.navigateByUrl('/title', { skipLocationChange: true }).then(() =>
          this.router.navigate(['/notesForm']));
      })
    }
    else {
      alert('Please Enter Valid information');
    }
  }
}
