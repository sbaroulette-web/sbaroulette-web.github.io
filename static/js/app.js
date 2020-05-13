
// Use D3 fetch to read the JSON file
// The data from the JSON file is arbitrarily named importedData as the argument
d3.json("static/js/samples.json").then((importedData) => {
  // console.log(importedData);
  var data = importedData;

  
    // Sort the data array using the OTUSearchResults value
    data.samples.sort(function(a, b) {
      return (b.OTUSearchResults) - (a.OTUSearchResults);
    });
  
    // Slice the first 10 objects for plotting
    data.samples = data.samples.slice(0, 10);
  
    // Reverse the array due to Plotly's defaults
    data = data.samples.reverse();
  
    // Trace1 for the OTU Data
    var trace1 = {
      x: data.map(row => row.sample_values),
      y: data.map(row => row.otu_ids),
      text: data.map(row => row.otu_labels),
      name: "OTU",
      type: "bar",
      orientation: "h"
    };
  
    // data
    var chartData = [trace1];
  
    // Apply the group bar mode to the layout
    var layout = {
      title: "Top 10 OTUs",
      barmode: "group"
};
  
    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("plot", chartData, layout);
  });
  