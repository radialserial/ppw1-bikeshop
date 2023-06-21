import { Component } from '@angular/core';
import { Page } from '../../util/page';
import { PAGES } from '../../util/pages';

@Component({
  selector: 'app-menu-sidenav',
  templateUrl: './menu-sidenav.component.html',
  styleUrls: ['./menu-sidenav.component.scss']
})
export class MenuSidenavComponent {
  pages: Page[] = PAGES;
}
