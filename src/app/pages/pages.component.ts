import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

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

  ngOnInit(): void {
  }

}
