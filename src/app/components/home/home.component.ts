
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openLoginModal() {
    this.modalRef = this.modalService.show(LoginComponent);
  }

  openSignUpModal() {
    this.modalRef = this.modalService.show(SignUpComponent);
  }
}
