import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isclicked = false;

  onclickMenu() {
    console.log('Menu clicked');
    const menu = document.querySelector('.toogle-menu');
    if (menu) {
      this.isclicked = !this.isclicked;
      if (this.isclicked) {
        menu.classList.remove('disabled');
        menu.classList.add('active');
      } else {
        menu.classList.remove('active');
        menu.classList.add('disabled');
      }
    }
  }
}
