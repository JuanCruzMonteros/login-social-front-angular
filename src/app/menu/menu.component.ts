import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  userLogged: any;
  isLogged: boolean;

  constructor(
    private authService: SocialAuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.authState.subscribe(
      data => {
        this.userLogged = data;
        this.isLogged = (this.userLogged != null);
      }
    );
  }

  logOut(): void {
    this.authService.signOut();
    this.router.navigate(['/login']);
  }
}
