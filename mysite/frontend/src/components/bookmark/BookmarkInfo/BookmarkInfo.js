import React from 'react';
import styles from './BookmarkInfo.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

const BookmarkInfo = ({onRemove, title, url, id, logged}) => (
  <div className={cx('bookmark-info')}>
    <div className={cx('info-contents')}>
      <div className={cx('site-name')}>
        {title}
      </div>
      <div className={cx('site-url')}>
        {
          url && <a href={url}>{url}</a>
        }
      </div>
      <div className={cx('buttons')}>
      {
        logged && [<Button theme="default" key="edit" to={`/editor?id=${id}`}>수정하기</Button>,
        <Button theme="default" key="remove" onClick={onRemove}>삭제하기</Button>]
      }
      </div>
    </div>
  </div>
);

export default BookmarkInfo;