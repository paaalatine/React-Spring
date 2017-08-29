import * as React from 'react';
import TextField from './text-field'

export default class RegistrationForm extends React.Component {

    constructor() {
        super();
    }

    render(){
        return(
            <div>
                <form action="/sonya9_war_exploded/reg" method="post" >
                    <table className="forms">
                        <tbody>
                        <tr>
                            <td>
                                Username
                                <TextField type="text" className="inputs" name="log" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Password
                                <TextField type="password" className="inputs" name="pass"/>
                            </td>
                        </tr>
                        <tr>
                            <td><input className="sub" type="submit" value="Sing up" /></td>
                        </tr>
                        </tbody>
                    </table>
                </form>

            </div>
        )
    }
}