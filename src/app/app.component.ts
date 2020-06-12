import { Component } from '@angular/core';
import { Feature } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Feature = Feature;
  loadedFeature: Feature = Feature.Recipe
  onNavigate = (feature: Feature) => this.loadedFeature = feature;
}
