import { Component } from '@angular/core';
import { ServicesService } from './service/services.service';
import { Users } from './models/notes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchText='' ;
  heroes = [
    { id: 11, name: 'Mr. Nice', country: 'India' },
    { id: 12, name: 'Narco' , country: 'USA'},
    { id: 13, name: 'Bombasto' , country: 'UK'},
    { id: 14, name: 'Celeritas' , country: 'Canada' },
    { id: 15, name: 'Magneta' , country: 'Russia'},
    { id: 16, name: 'RubberMan' , country: 'China'},
    { id: 17, name: 'Dynama' , country: 'Germany'},
    { id: 18, name: 'Dr IQ' , country: 'Hong Kong'},
    { id: 19, name: 'Magma' , country: 'South Africa'},
    { id: 20, name: 'Tornado' , country: 'Sri Lanka'}
  ];

  Users:Users;
  getusers: any;
  constructor(private service: ServicesService, private router: Router) {
this.Users=new Users();
   }
  title = 'my-app';

  delete(id: any) {
    alert("deleted")
    this.service.delete(id).subscribe((data) => {
      console.log("delete");
      this.ngOnInit();
     
      
    })
  }
  MoreDetails(){
   alert("hai")
   this.router.navigate(['notesForm'])
      console.log(this.Users)
   
  }
  ngOnInit() {
    
    this.service.getByid().subscribe((data) => {
      this.getusers = data
    })
  }
  search()
  {

if(this.searchText!=undefined)
{
  console.log(this.searchText);

    this.service.data=this.searchText
 
  }
 } 

}
