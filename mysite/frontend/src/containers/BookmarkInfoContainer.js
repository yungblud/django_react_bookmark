import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as listActions from 'store/modules/list';
import * as editorActions from 'store/modules/editor';
import BookmarkInfo from 'components/bookmark/BookmarkInfo';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';


class BookmarkInfoContainer extends Component {
    initialize = async () => {
        const { id, ListActions } = this.props;
        
        try {
           await ListActions.readBookmarkList(id);
        } catch(e){
            console.log(e);
        }
    }

    componentDidMount(){
        this.initialize();
    }

    handleRemove = async () => {
        const { EditorActions, history, id} = this.props;
        try {
            await EditorActions.removeBookmark(id);
            history.push('/');
        } catch(e){
            console.log(e);
        }
    }
 render() {
     const { id, site_title, site_url } = this.props.bookmark.toJS();
     const { isLogged } = this.props;
     const {handleRemove} = this;
   return (
    <BookmarkInfo logged={isLogged} id={id} title={site_title} url={site_url} onRemove={handleRemove}/>
   );
 }
}

export default connect(
  (state) => ({
      bookmark: state.list.get('bookmark'),
      isLogged: state.base.get('isLogged')
  }),
  (dispatch) => ({
      ListActions: bindActionCreators(listActions, dispatch),
      EditorActions: bindActionCreators(editorActions, dispatch)
  })
)(withRouter(BookmarkInfoContainer));