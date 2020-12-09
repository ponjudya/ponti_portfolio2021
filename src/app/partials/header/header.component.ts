import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])

  onWindowScroll() {

    let nav = document.getElementById('nav');

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      nav.classList.add('navFixed');
    } else {
      nav.classList.remove('navFixed');
    }
  }

}
