// Use the D3 library to read in samples.json

d3.json("samples.json").then((data) => {
	console.log(data);
	// Save JSON string as variable
	var sample_data = data;
	var samplesIDs = sample_data.names;
	var allData = sample_data.samples;
	// Add sample IDs as options/value attrivutes to the dropdown menu
	samplesIDs.forEach((sample)=> {
		d3.select("#selDataset").append("option").attr("value", sample).text(sample); 
	})
 
});


// Write the optionChanged function 

function optionChanged() {
	var x = document.getElementById("selDataset").value;
	d3.select("h5").text('Test Subject ID No.: ' + x);
	console.log(x);
	d3.json("samples.json").then((data) => {
		console.log(data);
		// Save JSON string as variable
		var samples_data = data;
		var sample_data = samples_data.samples;
		OTU_ids = [];
		OTU_labels = [];

		for (let i = 0; i < sample_data.length; i++) {
			let sample = sample_data[i]
			graph = [];
			if (sample.id === x) {
				graph.push(sample);
				let sorted = graph.sort((a,b) => b.sample_values - a.sample_values);
				slicedData = sorted.slice(0,10);
				reversedData = slicedData.reverse();

				let trace1 = {
					x: reversedData.map(object => object.sample_values),
					y: reversedData.map(object => object.otu_labels),
					text: reversedData.map(object => object.otu_labels),
					type: "bar",
					orientation: "h"
				};

				let traceData = [trace1];
			
				  
				Plotly.newPlot('bar', traceData);
				console.log(slicedData);
			}
		}
	})

  };






// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.



// Create dropdown menu to display the top 10 OTUs found in that individual.



// On change to the DOM, call optionChanged()

// Add options to the dropdown menu












//Use otu_ids as the labels for the bar chart.


//Use otu_labels as the hovertext for the chart.