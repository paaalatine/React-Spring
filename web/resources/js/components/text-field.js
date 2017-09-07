import * as React from 'react';

export default class TextField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <input type={this.props.type} autoComplete="off" className={this.props.className} name={this.props.name} id={this.props.id} value={this.state.value} onChange={this.handleChange} />
        );
    }
}