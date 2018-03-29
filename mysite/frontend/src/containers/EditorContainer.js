import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as editorActions from 'store/modules/editor';
import * as baseActions from 'store/modules/base';
import * as listActions from 'store/modules/list';
import EditorForm from 'components/editor/EditorForm';
import {withRouter} from 'react-router-dom';
import queryString from 'query-string';


class EditorContainer extends Component {

    componentDidMount() {
        // baseaction isLogged check.
        const {history, location} = this.props;
        if (localStorage.logged !== "true") {
            history.push('/');
        }

        const { EditorActions } = this.props;
        EditorActions.initialize();

        const { id } = queryString.parse(location.search);
        if(id){
            EditorActions.readBookmark(id);
        }

    }

    handleChangeInput = ({name, value}) => {
        const { EditorActions } = this.props;
        EditorActions.changeInput({name, value});
    }

    handleSubmit = async () => {
        const { EditorActions, site_title, site_url, history, location } = this.props;
        const { id } = queryString.parse(location.search);
        try {
            if(id){
                await EditorActions.patchBookmark({id, site_title, site_url});
                history.push(`/bookmark/${id}`);
                return;
            }
            await EditorActions.postBookmark({site_title, site_url});
            history.push(`/bookmark/${this.props.bookmarkId}`);
        } catch(e){
            console.log(e);
        }
    }

    
    render() {
        const { handleChangeInput, handleSubmit, handleRemove } = this;
        const { site_title, site_url, bookmarkId } = this.props;
        return (<EditorForm onChangeInput={handleChangeInput} onSubmit={handleSubmit}
                    siteName={site_title} siteUrl={site_url} id={bookmarkId}/>);
    }
}

export default connect((state) => ({
    site_title: state
        .editor
        .get('site_title'),
    site_url: state
        .editor
        .get('site_url'),
    isLogged: state
        .base
        .get('isLogged'),
    bookmarkId: state.editor.get('bookmarkId'),
    bookmark: state.list.get('bookmark')
}), (dispatch) => ({
    EditorActions: bindActionCreators(editorActions, dispatch),
    BaseActions: bindActionCreators(baseActions, dispatch),
    ListActions: bindActionCreators(listActions, dispatch)
}))(withRouter(EditorContainer));