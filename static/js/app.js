// Use the D3 library to read in samples.json

d3.json("samples.json").then((data) => {
	console.log(data);
	// Save JSON string as variable
	var sample_data = data;
	var samplesIDs = sample_data.names;
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
		
		// Grab metadata for selected sample
		for (let j = 0; j < metadata.length; j++) {
			let meta = metadata[j];
			if (meta.id === parseInt(x)) {
				var Box = d3.select("#sample-metadata");
				Box.html("");
				Object.entries(meta).forEach(([key,value])=> {
					Box.append("h6").text(key + " : " + value);
				}
				)

				// Add guage plot

				// needle
				var level = 6;
				var degrees = 180 - level,
					radius = .5;
				var radians = degrees * Math.PI / 180;
				var xx = radius * Math.cos(radians);
				var yy = radius * Math.sin(radians);

				var mainPath = 'M -.0 -0.025 L .0 0.025 L ',
     			pathX = String(xx),
     			space = ' ',
     			pathY = String(yy),
     			pathEnd = ' Z';
				var path = mainPath.concat(pathX,space,pathY,pathEnd);

				var wash_data = [{ type: 'scatter',
					x: [0], y:[0],
						marker: {size: 28, color:'850000'},
						showlegend: false,
						name: 'speed',
						text: level,
						hoverinfo: 'text+name'},
					{ values: meta.wfreq,
					rotation: 90,
					text: ['0-1', '1-2', '2-3', '3-4','4-5', '5-6', '6-7','7-8','8-9'],
					textinfo: 'text',
					textposition:'inside',
					marker: {colors:['rgba(14, 127, 0, .5)', 'rgba(110, 154, 22, .5)',
											'rgba(170, 202, 42, .5)','rgba(290, 205, 75, .5)', 'rgba(202, 209, 95, .5)',
											'rgba(210, 206, 145, .5)','rgba(222, 216, 175, .5)', 'rgba(232, 226, 202, .5)',
											'rgba(242, 245, 225, .5)','rgba(255, 255, 255, 0)']},
					labels: ['0-1', '1-2', '2-3', '3-4','4-5', '5-6', '6-7','7-8','8-9'],
					hoverinfo: 'label',
					hole: .5,
					type: 'pie',
					showlegend: false
					}];

				
					var wash_layout = {
						shapes:[{
							type: 'path',
							path: path,
							fillcolor: '850000',
							line: {
							  color: '850000'
							}
						  }],
						title: '<b>Belly Button Washing Frequency</b> <br> Scrubs per Week',
						height: 600,
						width: 800,
						xaxis: {zeroline:false, showticklabels:false,
								   showgrid: false, range: [-1, 1]},
						yaxis: {zeroline:false, showticklabels:false,
								   showgrid: false, range: [-1, 1]}
					  };
				Plotly.newPlot('gauge', wash_data, wash_layout);

			}
		}



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


