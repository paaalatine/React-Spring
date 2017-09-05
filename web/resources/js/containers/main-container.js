/**
 * Created by sonya on 20.08.17.
 */
import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Page from '../components/page'
import User from '../components/user'
import * as pageActions from '../actions/page-actions'

class Main extends React.Component {
    render() {
        const { page } = this.props
        const { newR, newPoint } = this.props.pageActions
        return <div id="main">
            <User />
            <Page pointsForT={page.pointsForT} pointsForC={page.pointsForC} r={page.r} newR={newR} newPoint={newPoint}/>
        </div>
    }
}
function mapStateToProps (state) {
    return {
        page: state.page
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)