import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { User } from '../../models/user';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  email: string;
  password: string;
  confirmPassword: string;
  address: string;
  firstName: string;
  lastName: string;
  phone: string;

  constructor(public modalRef: BsModalRef, private authService: AuthenticationService) { }

  ngOnInit() {
  }

  registerUser() {
    const newUser = new User(this.email, this.password, this.firstName, this.lastName, this.address, this.phone, 'M');

    this.authService.registerUser(newUser);
  }

}
