import { Component } from '@angular/core';
import * as Phaser from 'phaser';
import { Game } from './models/game';
import { Score } from "./models/score";
const config:  Phaser.Types.Core.GameConfig = {
  title: 'GABCHero',
  width: 800,
  height: 600,
  parent: 'game',
  scene: [ Game, Score ],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 70 },
      debug: true
    }
  },
  backgroundColor: '#0078d7'
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent extends Phaser.Game {
  
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
}
window.onload = () => {
  var game = new AppComponent(config);
};
