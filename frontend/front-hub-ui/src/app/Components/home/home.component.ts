import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { FeatureComponent } from '../feature/feature.component';
import { ChooseComponent } from '../choose/choose.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent , FeatureComponent , ChooseComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
