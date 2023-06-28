// This shows the HTML page in "ui.html".
figma.showUI(__html__);

figma.ui.onmessage = msg => {
  if (msg.type === 'calculate-carbon-footprint') {
    const numberOfLayers = figma.root.children.length;
    const carbonFootprint = calculateCarbonFootprint(numberOfLayers);
    figma.ui.postMessage({ type: 'result', carbonFootprint: carbonFootprint });
  }
};

function calculateCarbonFootprint(numberOfLayers) {
  // Here we'll just pretend that each layer produces 0.001g of CO2.
  // In reality, you'd want to use a more complex calculation.
  return numberOfLayers * 0.001;
}
