import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item.component';

import './directory.component.scss';

const Directory = ({ sections, history }) => {

    return (
        <div className='directory-menu'>
            {
                sections.map(section => {

                    return <MenuItem
                        key={section.id}
                        title={section.title}
                        imageUrl={section.imageUrl}
                        size={section.size}
                        linkUrl={section.linkUrl} />
                })
            }
        </div>
    );

};

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps, null)(Directory);