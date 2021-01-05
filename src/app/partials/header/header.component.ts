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

  goToMain() {
    let main = document.getElementById('main_banner');
    main.scrollIntoView({ behavior: "smooth" });
  }

  goToAbout() {
    let about = document.getElementById('main_profile');
    about.scrollIntoView({ behavior: "smooth" });
  }

  goToSkills() {
    let skills = document.getElementById('main_skills');
    skills.scrollIntoView({ behavior: "smooth" });
  }

  goToProjects() {
    let projects = document.getElementById('main_projects');
    projects.scrollIntoView({ behavior: "smooth" });
  }
  
  goToContact() {
    let contact = document.getElementById('main_contact');
    contact.scrollIntoView({ behavior: "smooth" });
  }

}
