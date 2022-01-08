import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  public navItems = [
    {
      label: 'Search',
      path: '/search',
      icon: 'fa-search'
    },
    {
      label: 'My Collection',
      path: '/my-collection',
      icon: 'fa-book'
    }
  ];

  constructor() { }

}
