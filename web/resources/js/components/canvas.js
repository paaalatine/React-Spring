/**
 * Created by sonya on 23.08.17.
 */

import * as React from 'react';
import ReactDOM from 'react-dom';

export default class Canvas extends React.Component {

    rect;

    constructor() {
        super();
        this.setNew = this.setNew.bind(this);
        this.drawPoints = this.drawPoints.bind(this);
        this.drawFigure = this.drawFigure.bind(this);

    }
    setNew(e) {
        let w = parseInt(this.props.width);
        let h = parseInt(this.props.height);
        let rect = ReactDOM.findDOMNode(this.refs.cc).getBoundingClientRect();
        let x = (e.clientX - w/2 - rect.left)*14/w;
        let y = (-e.clientY + h/2 + rect.top)*14/w;
        console.log(x,y);
        this.props.newPoint(x, y, this.props.r);
    }

    drawPoints() {
        let canvas = document.getElementById(this.props.id);
        let context = canvas.getContext("2d");
        let w = parseInt(this.props.width);
        let h = parseInt(this.props.height);
        for(let i in this.props.points){
            let x = this.props.points[i].x * w/14 + w/2;
            let y = -this.props.points[i].y * w/14 + h/2;
            context.beginPath();
            if(this.props.points[i].entry){
                context.fillStyle = "#00a204";
            } else {
                context.fillStyle = "#981712";
            }
            context.arc(x, y, 3, 0, 2*Math.PI, false);
            context.closePath();
            context.fill();
        }
    }

    drawFigure() {
        let canvas = document.getElementById(this.props.id);
        let context = canvas.getContext("2d");
        let w = parseInt(this.props.width);
        let h = parseInt(this.props.height);
        let r = this.props.r*w/14;
        context.clearRect(0,0,w,h);
        context.fillStyle = '#ccffc3';
        context.strokeStyle = '#000000';
        context.fillRect( w/2, h/2, r, -r/2 );
        context.strokeRect( w/2, h/2, r, -r/2 );
        context.beginPath();
        context.arc(w/2,h/2, r, 0, Math.PI/2);
        context.lineTo(w/2, h/2);
        context.moveTo(w/2, h/2);
        context.closePath();
        context.fill();
        context.stroke();
        context.beginPath();
        context.moveTo(w/2, h/2);
        context.lineTo(w/2, h/2 - r/2);
        context.lineTo(w/2-r/2, h/2);
        context.fill();
        context.closePath();
        context.stroke();
        context.beginPath();
        context.moveTo(w/2, h);
        context.lineTo(w/2, 0);
        context.moveTo(0, h/2);
        context.lineTo(w, h/2);
        let xstep = w/2 + w/14;
        let ystep = h/2 - w/14;
        for(let i = 0; i < 5 ; ++i){
            context.moveTo(w/2 - 5, ystep);
            context.lineTo(w/2 + 5, ystep);
            context.moveTo(xstep, h/2 - 5);
            context.lineTo(xstep, h/2 + 5);
            xstep += w/14;
            ystep -= w/14;
        }

        context.stroke();
        context.closePath();
    }

    componentDidMount() {
        document.getElementById(this.props.id).addEventListener('click', this.setNew);
        this.drawFigure();
    }

    componentDidUpdate(){
        this.drawFigure();
        this.drawPoints();
    }

    componentWillUnmount(){
        document.getElementById(this.props.id).removeEventListener('click', this.setNew);
    }

    render() {
        return(
            <canvas ref="cc" width={ this.props.width } height={ this.props.height } id={ this.props.id }></canvas>
        );
    }
}

Canvas.propTypes = {
    r: React.PropTypes.number.isRequired,
    points: React.PropTypes.array.isRequired,
    newPoint: React.PropTypes.func.isRequired,
    width: React.PropTypes.string.isRequired,
    height: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired
}