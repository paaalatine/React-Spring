/**
 * Created by sonya on 20.08.17.
 */
import * as React from 'react';
import Table from "./table";
import TextField from "./text-field";
import Canvas from "./canvas";

export default class Page extends React.Component {

    onRBtnClick(e) {
        this.props.newR(+e.target.innerText)
    }

    onAddBtnClick() {
        let x = document.getElementById('x').value;
        let y = document.getElementById('y').value;
        let r = this.props.r;
        this.props.newPoint(x, y, r);
    }

    render() {
        const { r, pointsForT, pointsForC, newPoint } = this.props

        return <div>
            <Canvas r={r} points={pointsForC} newPoint={newPoint} width="500px" height="500px" id="canv"/>
            <p>
                select r
                <button onClick={this.onRBtnClick.bind(this)}>2</button>
                <button onClick={this.onRBtnClick.bind(this)}>3</button>
                <button onClick={this.onRBtnClick.bind(this)}>4</button>
            </p>
            <p>
                select x
                <TextField id='x'/>
            </p>
            <p>
                select y
                <TextField id='y'/>
            </p>
            <p>
                <button onClick={this.onAddBtnClick.bind(this)}>add</button>
            </p>

            <Table points={pointsForT}/>
        </div>
    }
}
Page.propTypes = {
    r: React.PropTypes.number.isRequired,
    pointsForT: React.PropTypes.array.isRequired,
    pointsForC: React.PropTypes.array.isRequired,
    newR: React.PropTypes.func.isRequired,
    newPoint: React.PropTypes.func.isRequired
}