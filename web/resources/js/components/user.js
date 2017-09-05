/**
 * Created by sonya on 20.08.17.
 */
import * as React from 'react';
import $ from 'jquery';

export default class User extends React.Component {

    constructor() {
        super();
        this.state = {
            username: ''
        };
    }

    exit(){
        $.ajax({
            url: "http://localhost:8080/sonya9_war_exploded/j_spring_security_logout",
            type: "POST"
        }).done(function () {
            document.location.href = "http://localhost:8080/sonya9_war_exploded/login";
        });
    }

    componentDidMount(){
        $.ajax({
            url: "/sonya9_war_exploded/getUsername",
            type: "POST"
        })
            .done(function (data) {
                this.setState({username: data});
            }.bind(this));
    }
    render() {
        return(
        <div id="bar">
            <div id="user">
                {this.state.username}
            </div>
            <input id="exitbut" type="button" value="exit" onClick={this.exit.bind(this)}/>
        </div>
        )
    }
}