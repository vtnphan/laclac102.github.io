import { Component, signal } from '@angular/core';
import { NavigationComponent } from './components/navigation/navigation';
import { Home } from './components/home/home';
import { Experiences } from './components/experiences/experiences';
import { Education } from './components/education/education';
import { SkillsComponent } from './components/skills/skills';
import { Honors } from './components/honors/honors';
import { Languages } from './components/languages/languages';

@Component({
  selector: 'app-root',
  imports: [
    NavigationComponent,
    Home,
    Experiences,
    Education,
    SkillsComponent,
    Honors,
    Languages
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
