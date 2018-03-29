import React from 'react';
import styles from './BookmarkList.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const BookmarkItem = ({siteName, siteUrl, id}) => {
  return (
    <div className={cx('bookmark-item')}>
    <Link to={`/bookmark/${id}`}>
      <div className={cx('site-name')}>
        {siteName}
      </div>
      <div className={cx('site-url')}>
        {siteUrl}
      </div>
      </Link>
    </div>
  )
}


const BookmarkList = ({bookmarks}) => {
  const bookmarkList = bookmarks.map(
    (bookmark) => {
      const { id, site_title, site_url } = bookmark.toJS();
      return (
        <BookmarkItem siteName={site_title} siteUrl={site_url} key={id} id={id}/>
      )
    }
  )

  return (
    (
      <div className={cx('bookmark-list')}>
        {
          bookmarkList
        }
      </div>
    )
  )
}

export default BookmarkList;