/**
 * Generates the SVG element g which will contain the data visualisation.
 *
 * @param {object} margin The desired margins around the graph
 * @returns {*} The d3 Selection for the created g element
 */
export function generateG (margin) {
  return d3
    .select('.overview-graph')
    .select('svg')
    .append('g')
    .attr('id', 'overview-graph-g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
}

/**
 * Appends an SVG g element which will contain the lines and points representing the data.
 *
 * @param {*} g The d3 Selection of the graph's g SVG element
 */
export function appendPointG (g) {
  g.append('g').attr('class', 'lines')
}

/**
 * Sets the size of the SVG canvas containing the graph.
 *
 * @param {number} width The desired width
 * @param {number} height The desired height
 */
export function setCanvasSize (width, height) {
  d3.select('#overview-graph')
    .select('svg')
    .attr('width', width)
    .attr('height', height)
}

/**
 * Appends an SVG g element which will contain the axes.
 *
 * @param {*} g The d3 Selection of the graph's g SVG element
 */
export function appendAxes (g) {
  g.append('g').attr('class', 'x axis')

  g.append('g').attr('class', 'y axis')
}
