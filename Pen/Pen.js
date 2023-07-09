/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Pen extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./Pen/costumes/Kostüm1.svg", { x: 0, y: 0 })
    ];

    this.sounds = [new Sound("Plopp", "./Pen/sounds/Plopp.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.penDown = false;
    this.clearPen();
    this.penSize = 10;
    this.penColor = Color.rgb(255, 255, 255);
    while (true) {
      while (!this.mouse.down) {
        yield;
      }
      this.stage.vars.ok = 0;
      this.broadcast("line");
      this.stage.vars.penX = [];
      this.stage.vars.penY = [];
      while (!this.mouse.down) {
        yield;
      }
      this.goto(this.mouse.x, this.mouse.y);
      this.penDown = true;
      while (!!this.mouse.down) {
        this.goto(this.mouse.x, this.mouse.y);
        this.stage.vars.penX.push(this.x);
        this.stage.vars.penY.push(this.y);
        yield;
      }
      this.penDown = false;
      this.stage.vars.penY.push("#");
      while (!(this.toNumber(this.stage.vars.ok) === 1)) {
        yield;
      }
      yield;
    }
  }
}
