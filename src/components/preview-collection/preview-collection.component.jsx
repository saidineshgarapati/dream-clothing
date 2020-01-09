import React from 'react'
import './preview-collection.style.scss'
import CollectionItem from '../collection-items/collection-item.component'

const CollectionPreview = ({title, items}) => {
    return(
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
            {items.filter((item,idx) => idx < 4).map(({id, ...otherPtemProps}) => (
                <CollectionItem key={id} {...otherPtemProps}></CollectionItem>
            ))}
            </div>
        </div>
    )
}

export default CollectionPreview;