import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as baseActions from 'store/modules/base';
import Header from 'components/common/Header';
import { withRouter } from 'react-router-dom';

class HeaderContainer extends Component {

    handleLogout = () => {
        const { BaseActions, history } = this.props;
        BaseActions.logout();
        history.push('/');
    }
    render() {
        const {isLogged} = this.props;
        const { handleLogout } = this;
        return (<Header logged={isLogged} onLogout={handleLogout}/>);
    }
}

export default connect((state) => ({
    isLogged: state
        .base
        .get('isLogged')
}), (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
}))(withRouter(HeaderContainer));