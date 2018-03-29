import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import ListContainer from 'containers/ListContainer';

const ListPage = (props) => {
    return (
        <PageTemplate>
            <ListWrapper>
                <ListContainer/>
            </ListWrapper>
        </PageTemplate>
    );
};

export default ListPage;