import "./index.css";
import $ from "jquery";
import Toolbar from "./toolbar";
import Canvas from "./canvas";

const body = $("body");
const ribbon = $("<div id='ribbon'>").appendTo(body);
const toolbar = Toolbar.appendTo(body);
const timeline = $("<div id='timeline'>").appendTo(body);
const canvas = Canvas.$elem.appendTo(body);

Canvas._init();

