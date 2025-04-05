import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-header',
  standalone: true,
  imports: [FontAwesomeModule, NgbCollapseModule, RouterLink],
  templateUrl: './login-header.component.html',
  styleUrl: './login-header.component.scss'
})
export class LoginHeaderComponent {
  faBars = faBars;
  isMenuCollapsed = true;
}
