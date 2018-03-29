import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
import Footer from 'components/common/Footer';
import HeaderContainer from 'containers/HeaderContainer';

const cx = classNames.bind(styles);

const PageTemplate = ({children}) => (
  <div className={cx('page-template')}> 
    <header>
      <HeaderContainer/>
    </header>
    <main>
      {children}
    </main>
    <footer>
      <Footer/>
    </footer>
  </div>
);

export default PageTemplate;