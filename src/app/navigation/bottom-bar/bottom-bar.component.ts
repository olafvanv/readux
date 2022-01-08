import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { DialButton } from '../../models/dial-button.interface';
import { NavItem } from '../../models/nav-item.interface';
import { SearchType } from '../../models/search-type.enum';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss'],
  animations: [
    trigger('dialToggle', [
      state('open', style({
        opacity: '1',
        transform: '{{pos}}'
      }), {params: {pos: 'translate(0,0)'}}),
      state('closed', style({
        opacity: 0,
        transform: 'translate(0, 0)'
      })),
      transition('closed => open', [
        animate('250ms cubic-bezier(0.175, 0.885, 0.32, 1.275)')
      ]),
      transition('open => closed', [
        animate('150ms ease-out')
      ])
    ])
  ]
})
export class BottomBarComponent implements OnInit {
  @Input() navItems: NavItem[] = [
    { label: 'Home', icon: 'fa-home', path: '/' },
    { label: 'Search', icon: 'fa-search', path: '/search' },
    { label: 'Collection', icon: 'fa-book', path: '/my-collection' },
    { label: 'Info', icon: 'fa-info', path: '/info' },
  ];

  @Input() dialButtons: DialButton[] = [
    {
      label: 'Title',
      icon: 'fa fa-window-close',
      searchType: SearchType.Title
    },
    {
      label: 'Author',
      icon: 'fa fa-window-close',
      searchType: SearchType.Author
    },
    {
      label: 'Subject',
      icon: 'fa fa-window-close',
      searchType: SearchType.Subject
    },
    {
      label: 'Publisher',
      icon: 'fa fa-window-close',
      searchType: SearchType.Publisher
    },
    {
      label: 'ISBN',
      icon: 'fa fa-window-close',
      searchType: SearchType.ISBN
    }
  ]

  public open = false;
  public leftNavItems: NavItem[] = [];
  public rightNavItems: NavItem[] = [];

  constructor() { }

  ngOnInit(): void {
    if(this.navItems.length) {
      this.splitNavItems(this.navItems);
    }
  }

  public toggleDial() {
    this.open = !this.open;
  }

  public getPos(i: number): string {
    const size = 112;
    const cols = 3;
    const total = this.dialButtons.length;
    const lastRow = Math.floor(total / 3);

    const posY = -(Math.floor(i / cols) * size) - (size/2);

    // We start in the middle, so the first item has to go to the left, second in the middle and last to the right
    let posX = 0;
    switch(i%cols) {
      case 0:
        posX = -size;
        break;
      case 1:
        posX = 0;
        break;
      case 2:
        posX = size;
        break;
    }

    // We have to position the items on the last row in the center if there are 1 or 2 items left
    if (lastRow === Math.floor(i / 3) && total % cols !== 0) {
      // If one item left, position the item in the center
      if(total % cols === 1) {
        posX = 0;
      }
      // If two items left, position the items 50/50 by moving them to th right an extra amount
      else if (total % cols === 2) {
        posX += (size / 2)
      }
    }

    return `translate(${posX}px, ${posY}px)`;
  }

  private splitNavItems(items: NavItem[]) {
    this.leftNavItems = [items[0], items[1]];
    this.rightNavItems = [items[2], items[3]];
  }
}
