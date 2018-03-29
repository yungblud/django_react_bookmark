import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

const Header = ({logged, onLogout}) => (
  <div className={cx('header')}>
    <div className={cx('header-content')}>
      <Link to="/" className={cx('brand-logo')}>
        Djangish Bookmarks
      </Link>
    </div>
    <div className={cx('menu-bar')}>
    {
      logged && [<Link to="/editor" key="add" className={cx('menu')}>북마크 추가하기</Link>,
      <div className={cx('menu')} key="logout" onClick={onLogout}>로그아웃</div>]
    }
    {
      !logged && <Link to="/login" key="login" className={cx('menu')}>로그인</Link>
    }
      
    </div>
  </div>
);

export default Header;