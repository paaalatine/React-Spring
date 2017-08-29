/**
 * Created by sonya on 20.08.17.
 */
import * as React from 'react';

export default class User extends React.Component {
    render() {
        const { name } = this.props
        return <div>
            <p>Привет, {name}!</p>
        </div>
    }
}
User.propTypes = {
    name: React.PropTypes.string.isRequired
}