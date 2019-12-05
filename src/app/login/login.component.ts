import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LOGINComponent implements OnInit {

  username:string='zensar';

  password:string='';

  errorMessage:string="Authentication failed !!!!"

  isloginSuccessful :boolean=false;

  constructor() { }

  ngOnInit() {
  }


   loginHandle():void{
       
      if(this.username==='zensar' && this.password==='zensar'){
          console.log("Authentication successfulllyyyyy !!! ")
          this.isloginSuccessful=false
      }else{
        console.log("Authentication failed !!! ")
        this.isloginSuccessful=true
      }
  
  }

}
