import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'login-angular';

  register = {
    name: '',
    email: '',
    password: ''
  }

  onRegister() {
    console.log(this.register);
    this.register.name = '';
    this.register.email = '';
    this.register.password = '';
  }

}
