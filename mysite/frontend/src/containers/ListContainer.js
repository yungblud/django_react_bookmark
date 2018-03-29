import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as listActions from 'store/modules/list';
import BookmarkList from 'components/list/BookmarkList';

class ListContainer extends Component {
    getBookmarkList = () => {
        const {ListActions} = this.props;
        ListActions.getBookmarkList();
    }

    componentDidMount() {
        this.getBookmarkList();
    }
    render() {
        const { bookmarks } = this.props;
        return (<BookmarkList bookmarks={bookmarks}/>);
    }
}

export default connect((state) => ({
    bookmarks: state
        .list
        .get('bookmarks')
}), (dispatch) => ({
    ListActions: bindActionCreators(listActions, dispatch)
}))(ListContainer);