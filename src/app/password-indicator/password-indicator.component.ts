import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {GetStrengthService} from './get-strength.service';

@Component({
  selector: 'app-password-indicator',
  templateUrl: './password-indicator.component.html',
  styleUrls: ['./password-indicator.component.scss']
})
export class PasswordIndicatorComponent implements OnInit {
  appForm: FormGroup;
  show: boolean;
  animate: boolean;
  show_pass: boolean;
  info_h = true;
  info_s = false;
  pass: any;
  constructor(private service: GetStrengthService) { }
  ngOnInit() {
    this.appForm = new FormGroup({
      passwordControl: new FormControl('')
    });
  }
  setStrength(control) {
    this.service.strength(control)
      .subscribe(
        data => this.pass = data,
        error => console.log(error)
      );
  }
  showInfo(bool, elem) {
    elem.value = '';
    this.info_h = bool;
    this.info_s = bool;
  }
  hiddenInfo(bool) {
    this.info_h = !bool;
    this.info_s = !bool;
  }

  showForm(param) {
    this.show_pass = !param;
    this.show = !param;
  }
  showPass(input) {
    if (!this.show) {
      input.type = 'text';
    } else {
      input.type = 'password';
    }
    return (this.show === true) ? this.show = false : this.show = true;
  }
  addAnimation() {
    this.animate = true;
  }
  remoteAnimation() {
    this.animate = false;
  }
}
