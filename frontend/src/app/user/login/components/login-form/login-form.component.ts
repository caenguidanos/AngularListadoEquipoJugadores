import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'

import { LoginService } from '../../services/login-service.service'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email, Validators.minLength(10)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  })

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.loginService.login(this.loginForm.value).subscribe()
  }

  get username() {
    return this.loginForm.get('username')
  }

  get password() {
    return this.loginForm.get('password')
  }
}
