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
  getForceDirectedGraphData
} from '../../api/graph'

import {
  Node,
  Relationship,
  D3dom,
  IGraphViewData
} from './types'

interface IProps {
  graphWidth: number,
  graphHeight: number,
}

interface IState {
  graphViewData: IGraphViewData
}

class ForceDirectedGraph extends React.Component<IProps, IState> {
  readonly state: IState = {
    graphViewData: {
      nodes: [],
      relationships: []
    }
  }
  static defaultProps = {
    graphWidth: 960,
    graphHeight: 600,
  };
  // readonly state: IState = {
  //   svg: {},
  // };
  async componentDidMount() {
    const res: Ajax.AjaxResponse = await getForceDirectedGraphData()
    if (res && res.code === 0) {
      // console.log(res)
      this.setState({
        graphViewData: {
          nodes: res.data.nodes,
          relationships: res.data.relationships
        }
      })
    }
    // If the number of nodes are less than 51, render all data.
    if (this.state.graphViewData.nodes.length <= 50) {
      this.initGraph(this.state.graphViewData.nodes, this.state.graphViewData.relationships)
    } else { // More than 50 nodes, render only part of the nodes, click one node to show more relationships and nodes.
      this.renderNodes(this.state.graphViewData.nodes.slice(0, 50))
    }
  }

  renderNodes = (nodes: Node[]) => {
    console.log(nodes)
    // Listen to dragging of the SVG
    const svgdragstarted = (d: D3dom) => {
      d3Event.sourceEvent.stopPropagation();
      d3Event.sourceEvent.preventDefault();
      // console.log("start")

      // Stop rendering
      simulation.stop()
    }
    const svgdragged = (d: D3dom) => {
      // console.log(draggableSvg.attr("transform"))
      var t = getTranslation(draggableSvg.attr("transform"));
      // console.log(t)
      draggableSvg.attr("transform", "translate(" + [t[0] + d3Event.dx, t[1] + d3Event.dy] + ")")
      // console.log("drag: " + getTranslation(draggableSvg.attr("transform")));
    }
    const svgdragended = (d: D3dom) => {
      // console.log("end")
    }

    // Get relationships by source node
    const getRelationships = (d: Node): Relationship[] => {
      return this.state.graphViewData.relationships.filter(rel => {
        return rel.source === d.id
      })
    }

    // Get target nodes by relationships
    const getNodes = (rels: Relationship[]): Node[] => {
      const nodeIds = rels.map(rel => rel.target)
      return this.state.graphViewData.nodes.filter(node => {
        return nodeIds.indexOf(node.id) !== -1
      })
    }

    const getSubGraph = (d: Node) => {
      console.log(d)
      const relationships = getRelationships(d)
      const nodes = getNodes(relationships)
      // TODO clean old svg
      this.initGraph(nodes, relationships)
    }

    let colors: any = d3.scaleOrdinal(d3.schemeCategory10);

    let svg: D3dom = d3Select("svg.force-directed")
      .attr("overflow", "hidden")
      .call(d3Drag()
        .on("start", svgdragstarted)
        .on("drag", svgdragged)
        .on("end", svgdragended)
      )

    let draggableSvg = svg.append("g")
      .attr("class", "draggable-svg")
      .attr("transform", "translate(0,0)")

    let width: number = +svg.attr("width"),
      height: number = +svg.attr("height"),
      node: D3dom,
      link: D3dom

    let relType: D3dom,
      relTextPath: D3dom

    // Declare a force-directed graph simulation
    let simulation = d3.forceSimulation()
      .force("link", d3.forceLink().id(function (d: Relationship) { return d.id; }).distance(200).strength(1))
      .force("charge", d3.forceManyBody().strength(-30)) // ???
      .force("center", d3.forceCenter(width / 2, height / 2))
    // .alphaDecay(.7)
    const enter = (nodes: Node[]) => {
      // Node
      node = draggableSvg.append("g").attr("class", "nodes")
        .selectAll(".node")
        .data(nodes)
        .enter()
        .append("g")
        .attr("class", "node")
        .on("click", getSubGraph)
        .call(d3Drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended) // TODO refresh position
        );

      node.append("title")
        .text(function (d: Node) { return `(node)-${d.id}`; });

      node.append("circle")
        .attr("r", 10)
        .style("fill", function (d: Node, i: number) { return colors(i % 6); })
        .style("stroke", function (d: Node, i: number) { return d3.rgb(colors(i % 6)).darker(2); })

      node.append("text")
        .attr("dy", -3)
        .text(function (d: Node) { return d.name + ":" + d.label; });

      // Listen to the change of the location
      simulation
        .nodes(nodes)
        .on("tick", ticked)
      // .on("end", updatePosition)
      simulation.force("link")
        .links([]);

      // Transition
      svg.style("opacity", 1e-6)
        .transition()
        .duration(1000)
        .style("opacity", 1);
    }

    const ticked = () => {
      // Relocate nodes
      node
        .attr("transform", function (d: Node) { return "translate(" + d.x + ", " + d.y + ")"; });
    }
    // Dragging for the node
    const dragstarted = (d: Node) => {
      if (!d3Event.active) simulation.alphaTarget(0.3).restart()
      d.fx = d.x;
      d.fy = d.y;
    }

    const dragged = (d: Node) => {
      d.fx = d3Event.x;
      d.fy = d3Event.y;
    }

    const dragended = (d: Node) => {
      if (!d3Event.active) simulation.alphaTarget(0);
      d.fx = undefined;
      d.fy = undefined;
    }
    enter(nodes)
  }

  initGraph = (nodes: Node[], relationships: Relationship[]) => {
    // Listen to dragging of the SVG
    const svgdragstarted = (d: D3dom) => {
      d3Event.sourceEvent.stopPropagation();
      d3Event.sourceEvent.preventDefault();
      // console.log("start")

      // Stop rendering
      simulation.stop()
    }
    const svgdragged = (d: D3dom) => {
      // console.log(draggableSvg.attr("transform"))
      var t = getTranslation(draggableSvg.attr("transform"));
      // console.log(t)
      draggableSvg.attr("transform", "translate(" + [t[0] + d3Event.dx, t[1] + d3Event.dy] + ")")
      // console.log("drag: " + getTranslation(draggableSvg.attr("transform")));
    }
    const svgdragended = (d: D3dom) => {
      // console.log("end")
    }

    let colors: any = d3.scaleOrdinal(d3.schemeCategory10);

    let svg: D3dom = d3Select("svg.force-directed")
      .attr("overflow", "hidden")
      .call(d3Drag()
        .on("start", svgdragstarted)
        .on("drag", svgdragged)
        .on("end", svgdragended)
      )
    let draggableSvg = svg.append("g")
      .attr("class", "draggable-svg")
      .attr("transform", "translate(0,0)")

    let width: number = +svg.attr("width"),
      height: number = +svg.attr("height"),
      node: D3dom,
      link: D3dom

    let relType: D3dom,
      relTextPath: D3dom

    // Declare a force-directed graph simulation
    let simulation = d3.forceSimulation()
      .force("link", d3.forceLink().id(function (d: Relationship) { return d.id; }).distance(200).strength(1))
      .force("charge", d3.forceManyBody().strength(-100)) // ???
      .force("center", d3.forceCenter(width / 2, height / 2))
    // .alphaDecay(.7)
    const enter = (links: Relationship[], nodes: Node[]) => {
      // Define Arrow
      draggableSvg.append('defs').append('marker')
        .attr('id', 'arrow-head')
        .attr('viewBox', '-0 -5 10 10')
        .attr('refX', 13)
        .attr('refY', 0)
        .attr('orient', 'auto')
        .attr('markerWidth', 13)
        .attr('markerHeight', 13)
        .attr('xoverflow', 'visible')

        .append('path')
        .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
        .attr('fill', '#999')
        .style('stroke', 'none');
      // Relationship
      let linkGroup = draggableSvg.append("g").attr("class", "links")
        .selectAll(".link")
        .data(links)
        .enter()
        .append("g")
        .attr("class", "link")
      // Title
      linkGroup.append("title")
        .text(function (d: Relationship) { return `Rel-[${d.type}]->`; });

      // Relationship line with the arrow
      link = linkGroup.append("line")
        // .attr("class", "link")
        .attr('marker-end', 'url(#arrow-head)')

      // Hidden virtual relationship lines for text direction
      // The textPath uses xlink:href:#rel-type-path to bind the virtual relationship line.
      relTextPath = linkGroup.append("path")
        .attr('class', 'rel-type-path')
        .attr('fill-opacity', '0')
        .attr('stroke-opacity', '0')
        .attr('id', function (d: Relationship, i: number) { return 'rel-type-path' + i })
        .style("pointer-events", "none");

      // Text of relationship type
      relType = linkGroup.append("text")
        .style("pointer-events", "none")
        .attr('class', 'rel-type')
        .attr('id', function (d: Relationship, i: number) { return 'rel-type' + i })
        .attr('font-size', 10)
        .attr('fill', '#aaa');
      // Virtual path of relationship type(Bind textPath direction to the relTextPath)
      relType.append('textPath')
        .attr('xlink:href', function (d: Relationship, i: number) { return '#rel-type-path' + i })
        .style("text-anchor", "middle")
        .style("pointer-events", "none")
        .attr("startOffset", "50%")
        .text(function (d: Relationship) { return d.type });

      // Node
      node = draggableSvg.append("g").attr("class", "nodes")
        .selectAll(".node")
        .data(nodes)
        .enter()
        .append("g")
        .attr("class", "node")
        .call(d3Drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended) // TODO refresh position
        );

      node.append("title")
        .text(function (d: Node) { return `(node)-${d.id}`; });

      node.append("circle")
        .attr("r", 10)
        .style("fill", function (d: Node, i: number) { return colors(i % 6); })
        .style("stroke", function (d: Node, i: number) { return d3.rgb(colors(i % 6)).darker(2); })

      node.append("text")
        .attr("dy", -3)
        .text(function (d: Node) { return d.name + ":" + d.label; });

      // Listen to the change of the location
      simulation
        .nodes(nodes)
        .on("tick", ticked)
        .on("end", updatePosition)
      simulation.force("link")
        .links(links);

      // Transition
      svg.style("opacity", 1e-6)
        .transition()
        .duration(1000)
        .style("opacity", 1);
    }

    const ticked = () => {
      // // Render it when the graph is stable enough
      // if (simulation.alpha() <= 0.05) {
      // Relocate links
      link
        .attr("x1", function (d: Relationship) { return (d.source as Node).x; })
        .attr("y1", function (d: Relationship) { return (d.source as Node).y; })
        .attr("x2", function (d: Relationship) { return (d.target as Node).x; })
        .attr("y2", function (d: Relationship) { return (d.target as Node).y; });

      // Relocate nodes
      node
        .attr("transform", function (d: Node) { return "translate(" + d.x + ", " + d.y + ")"; });

      // Relocate virtual lines that the text based on
      relTextPath.attr('d', function (d: Relationship) {
        return 'M ' + (d.source as Node).x + ' ' + (d.source as Node).y + ' L ' + (d.target as Node).x + ' ' + (d.target as Node).y;
      });

      relType.attr('transform', function (this: D3dom, d: Relationship) {
        if ((d.target as any).x < (d.source as any).x) {
          let bbox = (this).getBBox();

          let rx = bbox.x + bbox.width / 2;
          let ry = bbox.y + bbox.height / 2;
          return 'rotate(180 ' + rx + ' ' + ry + ')';
        }
        else {
          return 'rotate(0)';
        }
      });
      // console.timeEnd('x');
      // // Stop rendering
      // simulation.stop()
      // }
    }

    const updatePosition = () => {
      // let max = { x: 0, y: 0 },
      //   min = { x: 0, y: 0 }
      // // Stop rendering
      // simulation.stop()
      // if (nodes.length > 0) {
      //   // Store positions of min and max nodes
      //   nodes.forEach((node: Node) => {
      //     if ((node as any).x > max.x) {
      //       max.x = (node.x) as number
      //     }
      //     if ((node as any).y > max.y) {
      //       max.y = (node.y) as number
      //     }
      //     if ((node as any).x < min.x) {
      //       min.x = (node.x) as number
      //     }
      //     if ((node as any).y < min.y) {
      //       min.y = (node.y) as number
      //     }
      //   })
      //   // Set total size of SVG
      //   let width = max.x - min.x
      //   let height = max.y - min.y
      //   svg.attr("width", width)
      //   svg.attr("height", height)
      //   // Set visual size of SVG
      //   svg.attr('viewBox', `${min.x},${min.y},${width},${height}`)
      // }
    }

    const dragstarted = (d: Node) => {
      if (!d3Event.active) simulation.alphaTarget(0.3).restart()
      d.fx = d.x;
      d.fy = d.y;
    }

    const dragged = (d: Node) => {
      d.fx = d3Event.x;
      d.fy = d3Event.y;
    }

    const dragended = (d: Node) => {
      if (!d3Event.active) simulation.alphaTarget(0);
      d.fx = undefined;
      d.fy = undefined;
    }

    // d3.json("graph.json", function (error: any, graph: any) {
    //   if (error) throw error;
    //   update(graph.links, graph.nodes);
    // })

    enter(relationships, nodes)
  }

  // componentDidUpdate(prevProps: IProps, { graphViewData }: IState) {
  //   const { nodes, relationships } = graphViewData
  //   this.updateGraph(nodes, relationships)
  // }

  // shouldComponentUpdate({ nodes, relationships }: IProps, newState: {}) {
  //   nodes
  // }

  render() {
    const { graphWidth, graphHeight } = this.props

    return (
      <>
        <svg className="force-directed" width={graphWidth} height={graphHeight}></svg>
      </>
    );
  }
}

export default ForceDirectedGraph