import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as loginActions from 'store/modules/login';
import * as baseActions from 'store/modules/base';
import LoginForm from 'components/login/LoginForm';
import {withRouter} from 'react-router-dom';

class LoginContainer extends Component {

    initialize = () => {
        const { LoginActions } = this.props;
        LoginActions.initialize();
    }

    componentDidMount() {
        this.initialize();
    }

    handleChangeInput = ({name, value}) => {
        const {LoginActions} = this.props;
        LoginActions.changeInput({name, value});
    }

    handleLogin = async() => {
        const {BaseActions, history, id, password} = this.props;

        try {
            await BaseActions.login({username: id, password});
            localStorage.logged = "true";
            history.push('/');
        } catch (e) {
            console.log(e);
        }
    }
    render() {
        const {id, password, error} = this.props;
        const {handleChangeInput, handleLogin} = this;
        return (
            <div>
                <LoginForm
                    error={error}
                    onChangeInput={handleChangeInput}
                    id={id}
                    password={password}
                    onLogin={handleLogin}/>
            </div>
        );
    }
}

export default connect((state) => ({
    id: state
        .login
        .get('id'),
    password: state
        .login
        .get('password'),
    error: state
        .base
        .get('error')
}), (dispatch) => ({
    LoginActions: bindActionCreators(loginActions, dispatch),
    BaseActions: bindActionCreators(baseActions, dispatch)
}))(withRouter(LoginContainer));