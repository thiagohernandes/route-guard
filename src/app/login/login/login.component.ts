import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string;

  constructor(public authService: AuthService,  private route: ActivatedRoute) {
      this.message = '';
  }

  ngOnInit() {
    if(this.route.snapshot.params['msg'] != null && this.route.snapshot.params['msg'] != undefined){
      this.message = this.route.snapshot.params['msg'];
    }
  }

  login(username: string, password: string): boolean {
    this.message = '';
    if (!this.authService.login(username, password)) {
     this.message = 'Credenciais incorretas/Inexistentes.';
     setTimeout(function() {
      this.message = '';
     }.bind(this), 2500);
    }
    return false;
  }
    
  logout(): boolean {
    this.authService.logout();
    return false;
  }

}
