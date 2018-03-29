import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as baseActions from 'store/modules/base';

class Base extends Component {
    initialize = async () => {
        const { BaseActions } = this.props;
        if(localStorage.logged === "true") {
            BaseActions.tempLogin();
        }
        BaseActions.checkLogin({token: localStorage.access_token});
    }

    componentDidMount() {
        this.initialize();
    }
 render() {
   return (
    <div></div>
   );
 }
}

export default connect(
  (state) => ({
  }),
  (dispatch) => ({
      BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(Base);