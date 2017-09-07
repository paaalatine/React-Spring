/**
 * Created by sonya on 23.08.17.
 */

import * as React from 'react';
import ReactDOM from 'react-dom';

export default class Canvas extends React.Component {

    constructor() {
        super();
        this.setNew = this.setNew.bind(this);
        this.drawPoints = this.drawPoints.bind(this);
        this.drawFigure = this.drawFigure.bind(this);

    }
    setNew(e) {
        const w = canvas.clientWidth;
        const h = canvas.clientHeight;
        let rect = ReactDOM.findDOMNode(this.refs.cc).getBoundingClientRect();
        let x = (e.clientX - w/2 - rect.left)*14/w;
        let y = (-e.clientY + h/2 + rect.top)*14/w;
        this.props.newPoint(x.toFixed(2), y.toFixed(2), this.props.r);
    }

    drawPoints() {
        let canvas = document.getElementById(this.props.id);
        let context = canvas.getContext("2d");
        const w = canvas.width;
        const h = canvas.height;
        for(let i in this.props.points){
            let x = this.props.points[i].x * w/14 + w/2;
            let y = -this.props.points[i].y * w/14 + h/2;
            context.beginPath();
            context.strokeStyle="#000000";
            if(this.props.points[i].entry){
                context.fillStyle = "#f8f7b5";
            } else {
                context.fillStyle = "#444444";
            }
            context.arc(x, y, 3, 0, 2*Math.PI, false);
            context.closePath();
            context.stroke();
            context.fill();
        }
    }

    drawFigure() {
        let canvas = document.getElementById(this.props.id);
        let context = canvas.getContext("2d");
        const w = canvas.width;
        const h = canvas.height;
        let r = this.props.r*w/14;
        console.log(h, w, r);
        context.clearRect(0,0,w,h);
        context.fillStyle = '#ff8987';
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
        let canvas = document.getElementById("canv");
        canvas.style.width ='100%';
        canvas.height=canvas.clientWidth;
        document.getElementById(this.props.id).addEventListener('click', this.setNew);
        this.drawFigure();
        this.drawPoints();
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
            <canvas ref="cc" id={ this.props.id } width="500px" height="500px"></canvas>
        );
    }
}

Canvas.propTypes = {
    r: React.PropTypes.number.isRequired,
    points: React.PropTypes.array.isRequired,
    newPoint: React.PropTypes.func.isRequired,
    id: React.PropTypes.string.isRequired
}