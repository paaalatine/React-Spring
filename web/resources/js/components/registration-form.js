import * as React from 'react';
import TextField from './text-field'
import $ from 'jquery'

export default class RegistrationForm extends React.Component {

    reg(){
        let user = $("#log").val();
        let pass = $("#pass").val();
        let re = /\w+/;
        if(!re.test(user)){
            var $el = $("#log"),
                originalColor = $el.css("background");

            $el.css("background", "#ffefed");
            setTimeout(function(){
                $el.css("background", originalColor);
            }, 800);
            return;
        }
        if(!re.test(pass)){
            var $el = $("#pass"),
                originalColor = $el.css("background");
            $el.css("background", "#ffefed");
            setTimeout(function(){
                $el.css("background", originalColor);
            }, 800);
            return;
        }
        $.ajax({
            url: "/sonya9_war_exploded/reg",
            type: "POST",
            data: {
                log: user,
                pass: pass
            }
        })
            .done(function (data) {
                data = JSON.parse(data);
                if(data.error==2) {
                    document.getElementById("err").className="error";
                    document.getElementById("err").innerHTML = "Username is already taken.";
                }
                else {
                    $.ajax({
                        url: "http://localhost:8080/sonya9_war_exploded/j_spring_security_check",
                        type: "POST",
                        data: {
                            username: user,
                            password: pass
                        }
                    })
                        .done(function() {
                            document.location.href = "http://localhost:8080/sonya9_war_exploded/";
                        });
                }
            });

    }

    render(){
        return(
            <div>
                <form>
                    <table className="forms">
                        <tbody>
                        <tr>
                            <td>
                                Username
                                <TextField type="text" className="inputs" id="log" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Password
                                <TextField type="password" className="inputs" id="pass"/>
                            </td>
                        </tr>
                        <tr>
                            <td><input className="sub" type="button" onClick={this.reg.bind(this)} value="Sign up" /></td>
                        </tr>
                        </tbody>
                    </table>
                </form>

            </div>
        )
    }
}