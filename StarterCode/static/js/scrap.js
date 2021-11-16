var data = [{
	type: 'bar',
	x: [20, 14, 23],
	y: ['giraffes', 'orangutans', 'monkeys'],
	orientation: 'h'
  }];
  
  Plotly.newPlot('bar', data);






function optionChanged() {
	var x = document.getElementById("selDataset").value;
	d3.select("h5").text('Test Subject ID No.: ' + x);
	console.log(x);
	d3.json("samples.json").then((data) => {
		var samples = data;
		var sample_data = samples.samples;
		OTU_ids = [];
		OTU_labels = [];
		for (let i = 0; i < sample_data.length; i++) {
			let sample = sample_data[i]
			if (sample.id = x) {
				OTU_ids.push(sample.otu_ids);
				OTU_labels.push(sample.otu_labels);
			}
		}
	});


  for (let i = 0; i < sample_data.length; i++) {
    let sample = sample_data[i]
    if (sample.id === x) {
      OTU_ids.push(sample.otu_ids);
      OTU_labels.push(sample.otu_labels);
      console.log(OTU_ids);



d3.json("samples.json").then((data) => {
	console.log(data);
	// Save data to variable
	Object.entries(data).forEach(function(key){
	console.log(key[0]);
	console.log(key[1]);
	var key1 = key[0];
	var value1 = key[1];
	})
	});


  let select = d3.select("#selDataset");
	let result = d3.select("h5");
	select.addEventListener(optionChanged () {
		result.textContent = this.value;
	});
var individuals = data.names;

for (let i = 0; i < individuals.length; i++) {
	let opt = individuals[i];
	let el = d3.select("#selDataset").createElement("option");
	el.textContent = opt;
	el.value = opt;
	d3.select("#selDataset").appendChild(el);
};


function optionChanged() {
	var selectBox = 
}


let selector = d3.select("#selDataset");
let sampleNames = data.map(ele =>ele.NAME);
		
sampleNames.forEach((sample) => {
	selector
		.append("option")
		.text(sample)
		.property("value", sample);
});



var individuals = BioData.names;


for (let i = 0; i < samples.length; i++) {
	var id = samples[i].id;
};

for (let i = 0; i < 153; i++) {
	let opt = individuals[i];
	let el = d3.select("#selDataset").createElement("option");
	el.textContent = opt;
	el.value = opt;
	select.appendChild(el);
};


individual.forEach((indivdiual) => {
  d3.select("#selDataset").append("option").text(individual);


samples

id: ### person id for dropdown

out_ids - otu label

sample_values: numerical value for each OTU 

d3.json("samples.json").then((data) => {
	console.log(data);
	var BioData = data;
	var individuals = BioData.names;
	individuals.forEach((individual) => {
		d3.select("#selDataset").append("option").text(individual);
	}
	});
// Use sample_values as the values for the bar chart.
for (let i = 0; i < samples.length; i++) {
	var id = samples[i].id;
};

//Use otu_ids as the labels for the bar chart.

d3.selectAll("#selDataset").on("change", optionChanged);

// Function called by DOM changes
function optionChanged() {
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");
  // Initialize an empty array for the individual's data
  var data = [];

  if (dataset == 'us') {
      data = us;
  }
  else if (dataset == 'uk') {
      data = uk;
  }
  else if (dataset == 'canada') {
      data = canada;
  }
  // Call function to update the chart
  updatePlotly(data);
}

//Use otu_labels as the hovertext for the chart.

key for dictionary is 0-152

// Create an array of each country's numbers
var us = Object.values(data.us);
var uk = Object.values(data.uk);
var canada = Object.values(data.canada);

// Create an array of music provider labels
var labels = Object.keys(data.us);

// Display the default plot
function init() {
  var data = [{
    values: us,
    labels: labels,
    type: "pie"
  }];

  var layout = {
    height: 600,
    width: 800
  };

  Plotly.newPlot("pie", data, layout);
}

// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");
  // Initialize an empty array for the country's data
  var data = [];

  if (dataset == 'us') {
      data = us;
  }
  else if (dataset == 'uk') {
      data = uk;
  }
  else if (dataset == 'canada') {
      data = canada;
  }
  // Call function to update the chart
  updatePlotly(data);
}

// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("pie", "values", [newdata]);
}

init();
