import React, { Component } from 'react';

import MenuItem from '../menu-item/menu-item';

import './directory.scss';

class Directory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          size: 'small'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          size: 'small'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          size: 'small'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/pWf0vvk/women.png',
          size: 'big'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/LxRcptm/men.png',
          size: 'big'
        }
      ]
    };
  }

  render() {
    const { sections } = this.state;
    return (
      <div className='directory-menu'>
        {sections.map((section, i) => (
          <MenuItem key={i} {...section} />
        ))}
      </div>
    );
  }
}

export default Directory;
