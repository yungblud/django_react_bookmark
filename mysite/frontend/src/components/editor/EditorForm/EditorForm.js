import React, {Component} from 'react';
import styles from './EditorForm.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

class EditorForm extends Component {
  
  handleChangeInput = (e) => {
    const { name, value } = e.target;
    const { onChangeInput } = this.props;
    onChangeInput({name, value});
  }
  render() {
    const {onSubmit, siteName, siteUrl, id} = this.props;
    const { handleChangeInput } = this;
    return (
      <div className={cx('editor-form')}>
        <div className={cx('editor-contents')}>
          <div className={cx('description')}>북마크 추가</div>
          <input
            type="text"
            name="site_title"
            className={cx('input')}
            value={siteName}
            onChange={handleChangeInput}
            placeholder="사이트 이름"/>
          <input
            type="text"
            name="site_url"
            className={cx('input')}
            value={siteUrl}
            onChange={handleChangeInput}
            placeholder="사이트 URL"/>
            <div className={cx('submit-button')}>
            {
              id ? <Button theme="default" onClick={onSubmit}>수정하기</Button> : <Button theme="default" onClick={onSubmit}>추가하기</Button>
            }
            </div>
        </div>
      </div>
    );
  }
} 

export default EditorForm;