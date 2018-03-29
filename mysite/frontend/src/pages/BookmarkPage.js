import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import BookmarkInfoContainer from 'containers/BookmarkInfoContainer';

const BookmarkPage = ({match}) => {
    const { id } = match.params;
    return (
        <PageTemplate>
            <BookmarkInfoContainer id={id}/>
        </PageTemplate>
    );
};

export default BookmarkPage;