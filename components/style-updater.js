const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');

const size = 600;

class CustomD3Component extends D3Component {

  initialize(node, props) {
    this.$body = d3.select('body');
    this.$containers = d3.selectAll('.idyll-text-container');
    this.$controls = d3.selectAll('.sliderContainer');
    this.background = d3.scaleLinear().domain([0, 1]).range(['#222', '#fff']);
    this.color = d3.scaleLinear().domain([1, 0]).range(['#222', '#fff']);
    this.fontSize = d3.scaleSqrt().domain([0, 1]).range([14, 30]);
    this.maxWidth = d3.scaleSqrt().domain([0, 0.25, 1]).range([600, 800, window.innerWidth - 150]);
  }

  update(props, oldProps) {
    const { brightness, fontSize } = props;
    this.$body
      .style('color', this.color(brightness))
      .style('background', this.background(brightness))
      .style('font-size', this.fontSize(fontSize) + 'px')
      .style('line-height', 2 * this.fontSize(fontSize) + 'px');



    this.$controls
      .style('background', this.background(brightness));

    this.$containers.style('max-width', this.maxWidth(fontSize) + 'px');

    // this.$containers.selectAll('li')
    //   .style('filter', `invert(${1 - brightness})`);
  }
}

module.exports = CustomD3Component;
