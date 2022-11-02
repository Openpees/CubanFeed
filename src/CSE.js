import React, { useState, useRef, useEffect } from 'react'
import * as d3 from 'd3';
import './App.css';
import './test.css'

function CSE() {
    const [data] = useState([506, 520, 515, 500, 400, 250, 280, 200, 100, 50, 25, 15]);
  const svgRef = useRef();

  const width = window.innerWidth - 200;
  const height = window.innerHeight ;
  const thing = ["red", "green"]
  useEffect(() => {
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .style('background', "#171b23")
      .style('overflow', 'visible')

    const xScale = d3.scaleLinear()
      .domain([0,data.length - 1])
      .range([0, width]);
    const yScale = d3.scaleLinear()
      .domain([0,height])
      .range([height,0]);
    const generatedScaledLine = d3.line()
      .x((d, i) => xScale(i))
      .y(yScale)
      //.curve(d3.curveCardinalClosed);
    svg.selectAll('.line')
      .data([data])
      .join('path')
        .attr('d', d => generatedScaledLine(d))
        .attr('fill', 'none')
        .attr('stroke', "#63ACFF");
    const xAxis = d3.axisBottom(xScale)
        .ticks(data.length)
        .tickFormat(i => i + 1);
    const yAxis = d3.axisLeft(yScale)
        .ticks(5);
    svg.append('g')
        .call(xAxis)
        .attr('transform', `translate(0, ${height})`);
    svg.append('g')
        .call(yAxis);
  }, [data]);
    return (
        <div className="cseDiv">
            <h1>Cuban Stock Exchange</h1>
            <svg className='csesvg' ref={svgRef}></svg>
            <p>Example Of The CSE UI</p>
        </div>
    )
}

export default CSE