/**
 * Created by sonya on 20.08.17.
 */
import * as React from 'react';
import Table from "./table";
import TextField from "./text-field";
import Canvas from "./canvas";
import { Button } from 'belle'
import $ from 'jquery'

export default class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {spinValue: 0};
    }

    onRBtnClick(e) {
        this.props.newR(+e.target.innerText)
    }

    spinChange(e){
        this.setState({spinValue: e.target.value})
    }
    onAddBtnClick() {
        let x = document.getElementById('x').value;
        let y = document.getElementById('y').value;
        let r = this.props.r;

        let re = /^[-+]?[0-9]+(\.[0-9]+)?$/;
        if(!re.test(x) || x>4 || x<-4){
            var $el = $("#x"),
                originalColor = $el.css("background");

            $el.css("background", "#ffefed");
            setTimeout(function(){
                $el.css("background", originalColor);
            }, 800);
            return;
        }
        this.props.newPoint(x, y, r);
    }

    render() {
        const { r, pointsForT, pointsForC, newPoint } = this.props

        return <div id="page">
            <div id="canvas">
                        <Canvas r={r} points={pointsForC} newPoint={newPoint} id="canv"/>
            </div>
            <div id="tableinputs">
                <div id="tablediv">
                    <Table points={pointsForT}/>
                </div>
                <div id="inputsdiv">
                    <p>
                        R:
                        <Button style={{
                            color: '#ffffff',
                            borderTop: '2px solid black',
                            borderBottom: '2px solid black',
                            border: '2px solid black',
                            borderRadius: 15,
                            background: '#514f50'
                        }}
                                hoverStyle={{
                                    color: '#514f50',
                                    borderTop: '2px solid black',
                                    borderBottom: '2px solid black',
                                    border: '2px solid black',
                                    borderRadius: 15,
                                    background: '#ffffff'
                                }}
                                focusStyle={{
                                    color: '#514f50',
                                    borderTop: '2px solid black',
                                    borderBottom: '2px solid black',
                                    border: '2px solid black',
                                    borderRadius: 15,
                                    background: '#ffffff'
                                }}
                                activeStyle={{
                                    color: '#514f50',
                                    borderTop: '2px solid black',
                                    borderBottom: '2px solid black',
                                    border: '2px solid black',
                                    borderRadius: 15,
                                    background: '#ffffff'
                                }}
                                onClick={this.onRBtnClick.bind(this)}>1</Button>
                        <Button style={{
                            color: '#ffffff',
                            borderTop: '2px solid black',
                            borderBottom: '2px solid black',
                            border: '2px solid black',
                            borderRadius: 15,
                            background: '#514f50'
                        }}
                                hoverStyle={{
                                    color: '#514f50',
                                    borderTop: '2px solid black',
                                    borderBottom: '2px solid black',
                                    border: '2px solid black',
                                    borderRadius: 15,
                                    background: '#f1f1f1'
                                }}
                                focusStyle={{
                                    color: '#514f50',
                                    borderTop: '2px solid black',
                                    borderBottom: '2px solid black',
                                    border: '2px solid black',
                                    borderRadius: 15,
                                    background: '#f1f1f1'
                                }}
                                activeStyle={{
                                    color: '#514f50',
                                    borderTop: '2px solid black',
                                    borderBottom: '2px solid black',
                                    border: '2px solid black',
                                    borderRadius: 15,
                                    background: '#f1f1f1'
                                }}  onClick={this.onRBtnClick.bind(this)}>2</Button>
                        <Button style={{
                            color: '#ffffff',
                            borderTop: '2px solid black',
                            borderBottom: '2px solid black',
                            border: '2px solid black',
                            borderRadius: 15,
                            background: '#514f50'
                        }}
                                hoverStyle={{
                                    color: '#514f50',
                                    borderTop: '2px solid black',
                                    borderBottom: '2px solid black',
                                    border: '2px solid black',
                                    borderRadius: 15,
                                    background: '#ffffff'
                                }}
                                focusStyle={{
                                    color: '#514f50',
                                    borderTop: '2px solid black',
                                    borderBottom: '2px solid black',
                                    border: '2px solid black',
                                    borderRadius: 15,
                                    background: '#ffffff'
                                }}
                                activeStyle={{
                                    color: '#514f50',
                                    borderTop: '2px solid black',
                                    borderBottom: '2px solid black',
                                    border: '2px solid black',
                                    borderRadius: 15,
                                    background: '#ffffff'
                                }} onClick={this.onRBtnClick.bind(this)}>3</Button>
                        <Button style={{
                            color: '#ffffff',
                            borderTop: '2px solid black',
                            borderBottom: '2px solid black',
                            border: '2px solid black',
                            borderRadius: 15,
                            background: '#514f50'
                        }}
                                hoverStyle={{
                                    color: '#514f50',
                                    borderTop: '2px solid black',
                                    borderBottom: '2px solid black',
                                    border: '2px solid black',
                                    borderRadius: 15,
                                    background: '#f1f1f1'
                                }}
                                focusStyle={{
                                    color: '#514f50',
                                    borderTop: '2px solid black',
                                    borderBottom: '2px solid black',
                                    border: '2px solid black',
                                    borderRadius: 15,
                                    background: '#f1f1f1'
                                }}
                                activeStyle={{
                                    color: '#514f50',
                                    borderTop: '2px solid black',
                                    borderBottom: '2px solid black',
                                    border: '2px solid black',
                                    borderRadius: 15,
                                    background: '#f1f1f1'
                                }}  onClick={this.onRBtnClick.bind(this)}>4</Button>
                        <Button style={{
                            color: '#ffffff',
                            borderTop: '2px solid black',
                            borderBottom: '2px solid black',
                            border: '2px solid black',
                            borderRadius: 15,
                            background: '#514f50'
                        }}
                                hoverStyle={{
                                    color: '#514f50',
                                    borderTop: '2px solid black',
                                    borderBottom: '2px solid black',
                                    border: '2px solid black',
                                    borderRadius: 15,
                                    background: '#f1f1f1'
                                }}
                                focusStyle={{
                                    color: '#514f50',
                                    borderTop: '2px solid black',
                                    borderBottom: '2px solid black',
                                    border: '2px solid black',
                                    borderRadius: 15,
                                    background: '#f1f1f1'
                                }}
                                activeStyle={{
                                    color: '#514f50',
                                    borderTop: '2px solid black',
                                    borderBottom: '2px solid black',
                                    border: '2px solid black',
                                    borderRadius: 15,
                                    background: '#f1f1f1'
                                }} onClick={this.onRBtnClick.bind(this)}>5</Button>
                    </p>
                    <p>
                        X:
                        <TextField id='x'/>
                    </p>
                    <p>
                        Y:
                        <input type="number" width="200" id="y" min="-3" max="5" value={this.state.spinValue} onChange={this.spinChange.bind(this)} required/>
                    </p>
                    <p>
                        <button id="add" onClick={this.onAddBtnClick.bind(this)}>ADD</button>
                    </p>
                </div>
            </div>
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