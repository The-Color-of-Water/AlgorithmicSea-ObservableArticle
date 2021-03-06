// Load the Observable runtime and inspector.
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";

// Your notebook, compiled as an ES module.
import notebook from "https://api.observablehq.com/@vamoss/algorithmic-sea.js?v=3";

// Load the notebook, observing its cells with a default Inspector that simply
// renders the value of every cell into the provided DOM node.
const runtime = new Runtime();
const main = runtime.module(notebook, Inspector.into(document.getElementById("container")));