import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Base from 'containers/Base';
import { ListPage, NotFoundPage, PostPage, LoginPage, EditorPage, BookmarkPage, SignupPage } from 'pages';
const App = (props) => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={ListPage}/>
                <Route path="/post" component={PostPage}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/signup" component={SignupPage}/>
                <Route path="/editor" component={EditorPage}/>
                <Route path="/bookmark/:id" component={BookmarkPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
            <Base/>
        </div>
    );
};

export default App;