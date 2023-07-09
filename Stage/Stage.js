/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Bühnenbild1", "./Stage/costumes/Bühnenbild1.png", {
        x: 480,
        y: 360
      })
    ];

    this.sounds = [
      new Sound("Dance Around", "./Stage/sounds/Dance Around.wav"),
      new Sound(
        "c418-sweden-minecraft-volume-alpha",
        "./Stage/sounds/c418-sweden-minecraft-volume-alpha.wav"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.i = 7;
    this.vars.help = 0;
    this.vars.distance = 0;
    this.vars.index = 1005;
    this.vars.ok = 1;
    this.vars.penX = [-207, -205, -164, -1, 240, 240, 240];
    this.vars.penY = [29, 29, 16, -48, -167, -180, -180, "#"];
  }

  *whenGreenFlagClicked() {
    while (true) {
      yield* this.playSoundUntilDone("c418-sweden-minecraft-volume-alpha");
      yield;
    }
  }
}
