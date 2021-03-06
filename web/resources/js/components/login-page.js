import * as React from 'react';
import ReactDOM from 'react-dom'
import LoginForm from './login-form'
import $ from 'jquery'
import RegistrationForm from './registration-form'


class LoginPage extends React.Component {

    constructor() {
        super();
        this.state = {
            form: <LoginForm/>,
            isChecked: true
        };
    }

    onLogBtnClick() {
        $('#err').html('');
        $('#err').removeClass('error');
        this.setState({form: <LoginForm/>, isChecked: true});
    }
    onRegBtnClick() {
        $('#err').html('');
        $('#err').removeClass('error');
        this.setState({form: <RegistrationForm/>, isChecked: false});
    }

    render() {
        let display = this.state.form
        let btn1 = this.state.isChecked ? "pushed" : "unpushed";
        let btn2 = !this.state.isChecked ? "pushed" : "unpushed";
        return (
            <div>
                <div id="login-page">
                    <input type="button" className = {btn1} id="left" value="Sign in" onClick={this.onLogBtnClick.bind(this)}/>
                    <input type="button" className = {btn2} id="right" value="Sign up" onClick={this.onRegBtnClick.bind(this)}/>
                    {display}
                </div>
                <div id="err"/>
            </div>
        );
    }
}

ReactDOM.render(
    <LoginPage/>,
    document.getElementById('root')
);