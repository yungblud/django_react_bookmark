import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configure from 'store/configure';

import App from 'components/App';

const render = (ctx) => {
    const {url} = ctx;

    const store = configure();

    const html = ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter location={url}>
                <App/>
            </StaticRouter>
        </Provider>
    );

    return html;
}

export default render;