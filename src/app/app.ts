
import { Component } from '@angular/core';
import { Header } from './header/header';
import { ComponentTwo } from './component-two/component-two';
import { ComponentThree } from './component-three/component-three';
import { ComponentFour } from './component-four/component-four';
import { ComponentFive } from './component-five/component-five';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    ComponentTwo,
    ComponentThree,
    ComponentFour,
    ComponentFive,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
