import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
/***
 * Administrator class
 * @author: Oscar Méndez
 * @author: Keyner Gómez
 * @author: Hansel Hampton
 */
export class AdministratorComponent implements OnInit {

  admin:Admin={
    email:'',
    password:''
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /***
   * Compare if the data of the admin login is right
   */
  compareData():void{
    if(this.admin.email=="admin@admin.com"){
      if (this.admin.password=="1234"){
        this.router.navigate(['/adminOptions']);
      }
    }else{
      alert("Wrong Data");
    }
  }

}

/***
 * interface admin
 */
export interface Admin {
  email:string;
  password:string;
}
