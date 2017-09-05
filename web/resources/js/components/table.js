/**
 * Created by sonya on 23.08.17.
 */
import * as React from 'react'

export default class Table extends React.Component {

    render() {
        const {points} = this.props
        var tableRows = points.map(function (item, index) {
            return (
                <tr key={index}>
                    <td>{item.x}</td>
                    <td>{item.y}</td>
                    <td>{item.r}</td>
                    <td>{(item.entry).toString()}</td>
                </tr>
            )
        });

        return(
                <table id="table">
                    <thead>
                        <tr id="mainraw">
                            <td>X</td>
                            <td>Y</td>
                            <td>R</td>
                            <td>Entry</td>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
    )
    }
}