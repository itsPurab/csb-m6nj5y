import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Pen from "./Pen/Pen.js";
import Calculate from "./Calculate/Calculate.js";
import Thumbnail from "./Thumbnail/Thumbnail.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Pen: new Pen({
    x: 240,
    y: -180,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  Calculate: new Calculate({
    x: 155.8503331618,
    y: -16.1916111397,
    direction: 80.53767779197439,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Thumbnail: new Thumbnail({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  })
};

const project = new Project(stage, sprites, {
  frameRate: 60 // Set to 60 to make your project run faster
});
export default project;
