import "./index.less";
import {

} from './styled';
import React from 'react'
import * as d3 from "d3";
import { drag as d3Drag } from 'd3-drag';
import {
  event as d3Event,
  select as d3Select
} from 'd3-selection';
import { getTranslation } from '../../utils/d3-transform'
import {
  getSunburstGraphData
} from '../../api/graph'

import {
  D3dom,
  IGraphViewData,
  SunburstChild,
  SunburstLeaf,
} from './types'

interface IProps {
  graphWidth: number,
  graphHeight: number,
}

interface IState {
  graphViewData: IGraphViewData
}

class SunburstGraph extends React.Component<IProps, IState> {
  readonly state: IState = {
    graphViewData: {
      name: '',
      children: []
    }
  }
  static defaultProps = {
    graphWidth: 960,
    graphHeight: 600,
  };

  async componentDidMount() {
    const res: Ajax.AjaxResponse = await getSunburstGraphData()
    if (res && res.code === 0) {
      // console.log(res)
      this.setState({
        graphViewData: {
          name: res.data.name,
          children: res.data.children
        }
      })
    }
    this.initGraph(this.state.graphViewData, this.props.graphWidth)
  }

  initGraph = (graphViewData: IGraphViewData, graphWidth: number) => {
    const radius = graphWidth / 2
    const color: (i: string) => any = d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, graphViewData.children.length + 1))
    const partition = (data: IGraphViewData, radius: number) => {
      return d3.partition()
        .size([2 * Math.PI, radius])
        (d3.hierarchy(data)
          .sum((d: any) => d.value)
          .sort((a: any, b: any) => b.value - a.value))
    }
    const arc: () => any = d3.arc()
      .startAngle((d: any) => d.x0)
      .endAngle((d: any) => d.x1)
      .padAngle((d: any) => Math.min((d.x1 - d.x0) / 2, 0.005))
      .padRadius(radius / 2)
      .innerRadius((d: any) => d.y0)
      .outerRadius((d: any) => d.y1 - 1)

    const format: (i: number) => any = d3.format(',d')
    const autoSize: (svg: any) => any = (svg) => {
      // document.body.appendChild(svg);
      const box = svg.getBBox();
      // document.body.removeChild(svg);
      svg.setAttribute("viewBox", `${box.x} ${box.y} ${box.width} ${box.height}`);
      return svg;
    }

    // Convert data to:

    // children: (10) [Node, Node, Node, Node, Node, Node, Node, Node, Node, Node]
    // data: {name: "flare", children: Array(10)}
    // depth: 0
    // height: 4
    // parent: null
    // value: 956129
    // x0: 0
    // x1: 6.283185307179586
    // y0: 0
    // y1: 96
    const root = partition(graphViewData, radius);

    console.log('root', root)
    const svg: D3dom = d3Select("svg.sunburst")
    // Graph
    console.log('root.descendants().filter((d: any) => d.depth)', root.descendants().filter((d: any) => d.depth))
    svg.append("g")
      .attr("fill-opacity", 0.6)
      .selectAll("path")
      .data(root.descendants().filter((d: any) => d.depth))
      .enter().append("path")
      .attr("fill", (d: any) => { while (d.depth > 1) d = d.parent;  return color(d.data.name); })
      .attr("d", arc)
      // Title
      .append("title")
      .text((d: any) => `${d.ancestors().map((d: any) => d.data.name).reverse().join("/")}\n${format(d.value)}`);
    // Text
    svg.append("g")
      .attr("pointer-events", "none")
      .attr("text-anchor", "middle")
      .selectAll("text")
      .data(root.descendants().filter((d: any) => d.depth && (d.y0 + d.y1) / 2 * (d.x1 - d.x0) > 10))
      .enter().append("text")
      .attr("transform", function (d: any) {
        const x = (d.x0 + d.x1) / 2 * 180 / Math.PI;
        const y = (d.y0 + d.y1) / 2;
        return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
      })
      .attr("dy", "0.35em")
      .text((d: any) => d.data.name);

    // Transition
    svg.style("opacity", 1e-6)
      .transition()
      .duration(1000)
      .style("opacity", 1);
    return autoSize(svg.node());
  }

  render() {
    const { graphWidth, graphHeight } = this.props

    return (
      <>
        <svg className="sunburst" width={graphWidth} height={graphHeight}></svg>
      </>
    );
  }
}

export default SunburstGraph