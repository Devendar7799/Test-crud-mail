import { Component, OnInit, DoCheck } from '@angular/core';
import { ServicesService } from '../service/services.service';
import { Router } from '@angular/router';
import { Users } from '../models/notes';
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit,DoCheck {
  Users: Users;
  getusers: any;
  getSearchedData:'';
  constructor(private service: ServicesService, private router: Router) {
    this.Users = new Users();
  }
  postUsers(form) {
    if (form.valid) {
      this.service.postUsers(this.Users).subscribe((data) => {

        this.router.navigateByUrl('/title', { skipLocationChange: true }).then(() =>
          this.router.navigate(['title/' + '12']));
      })
    }
    else {
      alert('Please Enter Valid information');
    }
  }
  delete(id: any) {
    alert("deleted")
    this.service.delete(id).subscribe((data) => {
      console.log("delete");
      this.ngOnInit();
    })
  }
  edit(id: any) {
    alert("edit")
    this.ngOnInit
    // window.location.reload();
  
    this.router.navigateByUrl('/title', { skipLocationChange: true }).then(() =>
    this.router.navigate(['edit/' + id]));

  }
  ngOnInit() {

    this.service.getByid().subscribe((data) => {
      this.getusers = data
    })
  }
  ngDoCheck()
  {
console.log(this.service.data);

    console.log(this.service.data!=undefined);
    // console.log(this.getSearchedData.length);
    if(this.service.data!=undefined  )
    {
  this.getSearchedData=  this.service.data
  console.log(this.getSearchedData);
  }
  else{
    this.ngOnInit
  }
  }



}
