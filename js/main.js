// write your javascript code here.
// feel free to change the pre-set attributes as you see fit

let margin = {
      top: 60,
      left: 50,
      right: 30,
      bottom: 35
    },
    width = 900 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

//SVG that will hold the visualization
const svg1 = d3.select('#d3-container')
.append('svg')
.attr('preserveAspectRatio',
    'xMidYMid meet') // this will scale your visualization according to the size of its parent element and the page.
.attr('width',
    '60%') // this is now required by Chrome to ensure the SVG shows up at all
.style('background-color', 'white')
.style('border', 'solid')
.attr('viewBox',
    [-margin.left / 2, -margin.top / 2, width + margin.left + margin.right,
      height + margin.top + margin.bottom].join(' '))

d3.csv("data/data.csv").then(function (data) {

  const number = data.columns.slice(1);
  // X axis
  let x = d3.scaleBand()
  .range([margin.left, width])
  .domain(data.map(function (d) {
    return d.X;
  }))
  .padding([1.0]);

// Add Y axis
  let y = d3.scaleLinear()
  .domain([0, 100])
  .range([height, 0]);

  // to limit x axis
  let x0 = d3.scaleBand()
  .domain(data.map(d => d[data.columns[0]]))
  .rangeRound([0, width])
  .paddingInner([0.01])

  // to limit x axis
  let x1 = d3.scaleBand()
  .domain(number)
  .rangeRound([0, x0.bandwidth()])
  .padding([0.01])

  let tooltip = d3.select("#d3-container")
  .append("div")
  .attr('class', 'tooltip')
  .style("position", "absolute")
  .style("z-index", "10")
  .style("visibility", "hidden")

  svg1.append("g")
  .selectAll("g")
  .data(data)
  .join("g")
  .attr("transform", d =>
      `translate(${x(d[data.columns[0]]) - x1.bandwidth() / 4},${0})`)
  .selectAll("rect")
  .data(d => number.map(key => ({key, value: d[key]})))
  .join("rect")
  .attr("x", d => x(d.key))
  .attr("y", d => y(d.value))
  .attr("width", x1.bandwidth() / 2)
  .attr("height", d => y(0) - y(d.value))
  .attr("fill", "#69b3a2")
  .on("mouseover", function (event, d) {
    d3.select(this).attr("fill", "red")
    //Update Tooltip Position & value
    tooltip
    //.style('top', e.clientY - 10 + 'px')
    //.style('left', e.clientX + 10 + 'px')
    .text(d.key + ", " + d.value)
    .style("visibility", "visible")
  })
  .on("mouseout", function () {
    d3.select(this).attr("fill", "#69b3a2")
    tooltip.style("visibility", "hidden");
  });

  svg1.append("g")
  .attr("transform", `translate(${0}, ${height})`)
  .call(d3.axisBottom(x).tickSize(0));

  svg1.append("g")
  .attr("transform", "translate(" + margin.left + ",0)")
  .call(d3.axisLeft(y));
});

