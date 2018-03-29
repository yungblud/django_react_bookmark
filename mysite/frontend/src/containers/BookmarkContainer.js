import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as bookmarkActions from 'store/modules/bookmark';
import BookmarkInfo from 'components/bookmark/BookmarkInfo';

class BookmarkContainer extends Component {
    initialize = () => {
        const {BookmarkActions} = this.props;
        BookmarkActions.initialize();
    }

    componentDidMount() {
        this.initialize();
    }
    render() {
        const {siteName, siteUrl} = this.props;
        return (<BookmarkInfo siteName={siteName} siteUrl={siteUrl}/>);
    }
}

export default connect((state) => ({
    siteName: state
        .bookmark
        .get('siteName'),     
    siteUrl: state
        .bookmark
        .get('siteUrl')
}), (dispatch) => ({
    BookmarkActions: bindActionCreators(bookmarkActions, dispatch)
}))(BookmarkContainer);