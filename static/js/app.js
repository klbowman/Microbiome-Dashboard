// Use the D3 library to read in samples.json

const dataPath = "data/samples.json";

d3.json(dataPath ).then((data) => {
	// Save JSON string as variable
	var sample_data = data;
	var samplesIDs = sample_data.names;
	// Add sample IDs as options/value attrivutes to the dropdown menu
	samplesIDs.forEach((sample)=> {
		d3.select("#selDataset").append("option").attr("value", sample).text(sample); 
	})
	// Populate page with data upon loading
	var x = samplesIDs[0];
	optionChanged(x)
});


// Write the optionChanged function 

function optionChanged() {
	var x = document.getElementById("selDataset").value;
	d3.select("h5").text('Test Subject ID No.: ' + x);
	console.log(x);
	d3.json(dataPath ).then((data) => {
		console.log(data);
		// Save JSON string as variable
		var samples_data = data;
		var sample_data = samples_data.samples;
		var metadata = samples_data.metadata;

		
		// Grab metadata for selected sample
		for (let j = 0; j < metadata.length; j++) {
			let meta = metadata[j];
			if (meta.id === parseInt(x)) {
				var Box = d3.select("#sample-metadata");
				Box.html("");
				Object.entries(meta).forEach(([key,value])=> {
					Box.append("h6").text(key + " : " + value);
					// store data for wash frequency
					let wash = parseInt(meta.wfreq);
					
						// Add guage plot
						var data = [
							{
							  domain: { x: [0, 1], y: [0, 1] },
							  value: wash,
							  title: { text: "Belly Button Wash Frequency" },
							  type: "indicator",
							  mode: "gauge+number+delta",
							  gauge: {
								axis: { range: [null, 10] },
								steps: [
								  { range: [0, 5], color: "lightgray" },
								  { range: [5, 10], color: "gray" }
								],
							  }
							}
						  ];
						var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
						Plotly.newPlot('gauge', data, layout)

				}
				)

			}

		};



		// Grab data for selected sample
		for (let i = 0; i < sample_data.length; i++) {
			let sample = sample_data[i];

							
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
					height: 600,
					width: 400,
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
					height: 500,
					width: 1200
				  };
				  
				  Plotly.newPlot('bubble', data, bubble_layout);


	

			};



		}





		
	})
	

  };


