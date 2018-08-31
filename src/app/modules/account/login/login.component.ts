import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../../services';
import { ROLE } from '../../../app.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;

  constructor(
    private accountSvc: AccountService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    // reset login status
    this.accountSvc.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  onFormLoginSubmit(user) {
    console.log(user);

    user.token = '76345ghjsdftygfhjew5623463*^!31365623238hsd6134546!!!!';
    user.roles = [{name: 'Administrator', code: ROLE.ADMIN}];
    localStorage.setItem(this.accountSvc.storeKey + '_' + 'XT_currentUser', JSON.stringify(user));
    // this.accountSvc
    //   .login(user)
    //   .subscribe((response: any) => {

    //   });

    // redirect route
    this.router.navigate([this.returnUrl]);
  }

}
