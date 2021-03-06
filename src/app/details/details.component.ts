import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angular4-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  user;
  key;
    constructor(private authService: AuthService,private route: Router) { }
  
    ngOnInit() {
      this.authService.authState.subscribe((user) => {
        this.user = user;
        console.log(this.user)
     
      });
    }
  
    signOut(): void {
  
    this.key = 'googleAuthToken';
      this.authService.signOut();
      localStorage.removeItem(this.key);
      this.route.navigate(['login']);
    }
  
    openNav() {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    }
    
     closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";
    }
      details(){
        this.route.navigate(['/details']);
      }
  }
  