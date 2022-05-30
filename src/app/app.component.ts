import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fire-front-angular';
  isUserLogged: boolean = false;

  constructor(private authService: AuthService) {}
  
  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLogged();  
  }

}
