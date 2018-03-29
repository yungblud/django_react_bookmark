import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as signupActions from 'store/modules/signup';
import SignupForm from 'components/signup/SignupForm';
import {withRouter} from 'react-router-dom';
import {getCookie} from 'lib/getCookie';

class SignupContainer extends Component {

    initialize = () => {
        const {SignupActions} = this.props;
        SignupActions.initialize();
    }

    componentDidMount() {
        this.initialize();
    }

    handleChangeInput = ({name, value}) => {
        const {SignupActions} = this.props;
        SignupActions.changeInput({name, value});
    }

    handleSignup = async () => {
        const {SignupActions, history, id, password} = this.props;

        try {
            const csrfToken = getCookie('csrftoken');

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken
                }
            }
            await SignupActions.signup({username: id, password: password}, config);
            history.push('/login');
        } catch (e) {
            console.log(e);
        }
    }
    render() {
        const {id, password, error} = this.props;
        const {handleChangeInput, handleSignup} = this;
        return (
            <div>
                <SignupForm
                    error={error}
                    id={id}
                    password={password}
                    onChangeInput={handleChangeInput}
                    onSignup={handleSignup}/>
            </div>
        );
    }
}

export default connect((state) => ({
    id: state
        .signup
        .get('id'),
    password: state
        .signup
        .get('password'),
    error: state.signup.get('error')
}), (dispatch) => ({
    SignupActions: bindActionCreators(signupActions, dispatch)
}))(withRouter(SignupContainer));