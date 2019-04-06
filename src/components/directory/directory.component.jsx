import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          linkTo: '/shop',
          size: 'small'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          linkTo: '/shop',
          size: 'small'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          linkTo: '/shop',
          size: 'small'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          linkTo: '/shop',
          size: 'big'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          linkTo: '/shop',
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
