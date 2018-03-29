import React, {Component} from 'react';
import styles from './SignupForm.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

class SignupForm extends Component {

  handleChangeInput = (e) => {
    const {name, value} = e.target;
    const {onChangeInput} = this.props;
    onChangeInput({name, value});
  }
  render() {
    const {handleChangeInput} = this;
    const {id, password, onSignup, error} = this.props;
    const { username: usernameError, password: passwordError } = error.toJS();
    return (
      <div className={cx('sign-form')}>
        <div className={cx('sign-contents')}>
          <div className={cx('description')}>
            Sign Up
          </div>
          <div className={cx('login-description')}>
            <div className={cx('lead-login')}>
              이미 가입 하셨나요?
              <Link className={cx('login-link')} to="/login">로그인하러 가기</Link>
            </div>
          </div>
          <div className={cx('error-content')}>
          {
            usernameError && <div className={cx('error')}>{usernameError}</div>
          }
          {
            passwordError && <div className={cx('error')}>{passwordError}</div>
          }
          </div>
          <input
            type="text"
            className={cx('input')}
            name="id"
            value={id}
            onChange={handleChangeInput}
            placeholder="아이디"/>

          <input
            type="password"
            className={cx('input')}
            name="password"
            value={password}
            onChange={handleChangeInput}
            placeholder="비밀번호"/>
          <div className={cx('login-button')}>
            <Button theme="default" onClick={onSignup}>회원가입</Button>
          </div>

        </div>
      </div>
    );
  }
}

export default SignupForm;