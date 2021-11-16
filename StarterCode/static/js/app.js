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
		var metadata = samples_data.metadata;

		// Grab data for selected sample
		for (let i = 0; i < sample_data.length; i++) {
			let sample = sample_data[i];
			let meta = metadata[i];

			if (meta.id === x) {
				console.log(meta);
			}

			if (sample.id === x) {
				// Create arrays with data from plot 
				sample_values = sample.sample_values;
				slicedData = sample_values.slice(0,10);
				reversedData = slicedData.reverse();
				sample_ids = sample.otu_ids;
				slicedIds = sample_ids.slice(0,10);
				reversedIds = slicedIds.reverse();
				y_values = reversedIds.map(i => "OTU-" + i);

				//Create horizontal bar chart
				let trace1 = {
					x: reversedData,
					y: y_values,
					text: y_values,
					type: "bar",
					orientation: "h"
				};

				let traceData = [trace1];

				let layout = {
					title: "Top 10 OTUs",
					xaxis: {title: 'OTU counts'},
					margin: {
					  l: 100,
					  r: 100,
					  t: 100,
					  b: 100
					}
				  };
				  
				Plotly.newPlot('bar', traceData, layout);

				// Create bubble plot 

				var trace2 = {
					x: sample_ids,
					y: sample_values,
					cmin: 0,
					cmax: 2000,
					mode: 'markers',
					marker: {
						color: sample_ids,
						size: sample_values,
						colorscale: 'greens',
					},
					text: sample.otu_labels 
				  };
				  
				  var data = [trace2];
				  
				  var bubble_layout = {
					title: 'Total Sample OTUs',
					xaxis: {title: 'OTU ID'},
					yaxis: {title: 'OTU Counts'},
					showlegend: false,
					height: 400,
					width: 800
				  };
				  
				  Plotly.newPlot('bubble', data, bubble_layout);

				  // Create a list of demographic info 


	

			};

		}





		
	})

  };
