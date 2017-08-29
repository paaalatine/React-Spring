import * as React from 'react';
import TextField from './text-field'
import $ from 'jquery'

export default class LoginForm extends React.Component {

    constructor() {
        super();
        this.state = {
            isEmptyU: false,
            isEmptyP: false
        };
    }

    log(){
        let user = document.getElementById("username").value;
        let pass = document.getElementById("password").value;
        if(user==''){
            var $el = $("#username"),
                originalColor = $el.css("background");

            $el.css("background", "#ffefed");
            setTimeout(function(){
                $el.css("background", originalColor);
            }, 500);
            return;
        }
        if(pass==''){
            var $el = $("#password"),
                originalColor = $el.css("background");

            $el.css("background", "#ffefed");
            setTimeout(function(){
                $el.css("background", originalColor);
            }, 500);
            return;
        }
        $.ajax({
            url: "http://localhost:8080/sonya9_war_exploded/j_spring_security_check",
            type: "POST",
            data: {
                username: user,
                password: pass
            }
        })
            .done(function (data) {
                data = JSON.parse(data);
                if(data.error) {
                    document.getElementById("err").className="error";
                    document.getElementById("err").innerHTML = "Incorrect username or password.";
                }
                else if (!data.error)
                    document.location.href = "http://localhost:8080/sonya9_war_exploded/";
            });
    }

    render(){
        return(
            <div>
                <form>
                    <table className="forms">
                        <tbody>
                            <tr>
                                <td>Username
                                    <TextField type="text" className="inputs" id="username"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Password
                                    <TextField className="inputs" type="password" id="password"/>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="button" className="sub"  value="Sing in" onClick={this.log.bind(this)} /></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}
