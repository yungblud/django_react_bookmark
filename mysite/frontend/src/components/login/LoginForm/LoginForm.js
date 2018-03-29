import React, {Component} from 'react';
import styles from './LoginForm.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';
import {Link} from 'react-router-dom';

const cx = classNames.bind(styles);

class LoginForm extends Component {

  handleChangeInput = (e) => {
    const {value, name} = e.target;
    const {onChangeInput} = this.props;
    onChangeInput({name, value});
  }

  handleKeyPress = (e) => {
    const { onLogin } = this.props;
    if(e.key === "Enter"){
      onLogin();
    }
  }
  render() {
    const {handleChangeInput, handleKeyPress} = this;
    const {id, password, onLogin, error} = this.props;
    return (
      <div className={cx('login-form')}>
        <div className={cx('login-contents')}>
          <div className={cx('description')}>
            로그인
          </div>
          <div className={cx('join-description')}>
              <div className={cx('lead-join')}>
                가입하지 않으셨나요?
                <Link className={cx('join-link')} to="/signup">가입하러 가기</Link>
              </div>
            </div>
          <div className={cx('error-content')}>
            {
              error && <div className={cx('error')}>아이디나 패스워드를 확인해주세요.</div>
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
            placeholder="비밀번호"
            onKeyPress={handleKeyPress}/>
          <div className={cx('login-button')}>
            <Button theme="default" onClick={onLogin}>로그인</Button>
          </div>

        </div>
      </div>
    )
  }

}

export default LoginForm;