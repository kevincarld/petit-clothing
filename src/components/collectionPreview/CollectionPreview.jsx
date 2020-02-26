import React from 'react';

//Style
import './collectionPreview.scss';

//Component
import CollectionItem from '../collectionItem/CollectionItem';

const CollectionPreview = ({title, items}) => (
  <div className='collection-preview'>
    <h1>{title.toUpperCase()}</h1>
    <div className="preview">
    {
      items
        .filter((item, i) => i<4 )
        .map( ({id, ...otherItemProps}) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))
    }
    </div>
  </div>
);

export default CollectionPreview;