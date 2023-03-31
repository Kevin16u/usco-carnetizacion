import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  summiting: boolean = false;
  opened = true;
  name: String = ''

  constructor(
    private router: Router,
  ){}


  isBiggerScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 768) {
      return true;
    } else {
      return false;
    }
  }

  signOut(): void {
    this.router.navigate(['security/sign-in'])
  }

}
