import { Component } from "@angular/core";

export enum Feature {
  Recipe = 'recipe',
  ShoppingList = 'shopping-list'
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  collapsed: boolean = false;
}