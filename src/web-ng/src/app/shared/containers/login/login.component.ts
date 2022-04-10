import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../_services/auth.service';
import { TokenStorageService } from '../../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoggedIn: boolean = false;
  isLoginFailed: boolean = false;
  roles: string[] = [];
  errorMessage: string = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) {
    this.loginForm = new FormGroup({
      userName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    })
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles
    }
  }

  onSubmit(): void {
    this.authService.login(this.loginForm?.value.userName, this.loginForm?.value.password).subscribe(data => {
      console.log(data)
      this.tokenStorage.saveToken(data.accessToken);
      this.tokenStorage.saveUser(data);
      this.isLoggedIn = true;
      this.isLoginFailed = false;
      this.roles = this.tokenStorage.getUser().roles;
      this.reloadPage();
    },
    err => {
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
    }
    )
  }

  reloadPage(): void {
    window.location.reload
  }

}
