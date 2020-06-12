import { Component, EventEmitter, Output } from "@angular/core";

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
  @Output() featureSelected = new EventEmitter<Feature>();
  Feature = Feature;
  onSelect = (feature: Feature) => this.featureSelected.emit(feature);
}