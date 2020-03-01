import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { Authenticate } from '../../data-models/authenticate';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {
  @Output() submitUser = new EventEmitter<Authenticate>();

  constructor() {}

  ngOnInit(): void {}

  login(authenticate: Authenticate) {
    console.log(authenticate.username);
    this.submitUser.emit(authenticate);
  }
}
