import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider, FacebookLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  socialUser: SocialUser;
  userLogged: SocialUser;
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

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      data => {
        this.socialUser = data;
        this.isLogged = true;
        this.router.navigate(['/'])
      }
    ).catch(
      err => {
        console.log(err);
      }
    );
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      data => {
        this.socialUser = data;
            this.isLogged = true;
            this.router.navigate(['/']);
      }
    )
  }

  logOut(): void {
    this.authService.signOut();
    this.router.navigate(['/login']);
  }

}
