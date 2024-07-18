// import { CanActivateFn } from '@angular/router';

// export const authguardGuard: CanActivateFn = (route, state) => {
//   return true;
// };


import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ServicesService } from "../services/services.service";

@Injectable ({
  providedIn : 'root'
})


export class AuthGuard {
  constructor( private commonServiceObj : ServicesService, private routerObj : Router) {}

  currentUser = {
    name : '',
    username : '',
    password : '',
    isSubscribed : false
  }


  canActivate () : boolean {
     this.commonServiceObj.currentUser.subscribe(res => {
      this.currentUser = res;
     })

     if(this.currentUser.name == 'test@gmail.com'){
       return true;
     }

     this.routerObj.navigate(['/login']);
     return false;
  }
}
