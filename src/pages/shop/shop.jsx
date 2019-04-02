import React, { Component } from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview';

import './shop.scss';

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: [
        {
          id: 1,
          title: 'Hats',
          items: [
            {
              id: 2,
              name: 'Blue Beanie',
              imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
              price: 10
            },
            {
              id: 5,
              name: 'Green Beanie',
              imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
              price: 10
            },
            {
              id: 6,
              name: 'Palm Tree Cap',
              imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
              price: 10
            },
            {
              id: 8,
              name: 'Wolf Cap',
              imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
              price: 10
            }
          ]
        },
        {
          id: 2,
          title: 'Sneakers',
          items: [
            {
              id: 1,
              name: 'Adidas NMD',
              imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
              price: 180
            },
            {
              id: 2,
              name: 'Adidas Yeezy',
              imageUrl: 'https://i.ibb.co/nQXjK8v/adidas-yeezy.png',
              price: 180
            },
            {
              id: 3,
              name: 'Black Converse',
              imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
              price: 180
            },
            {
              id: 4,
              name: 'Nike High Tops',
              imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
              price: 180
            }
          ]
        }
      ]
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <div className='shop'>
        <h1>Collections</h1>
        {collections.map((collection, idx) => (
          <CollectionPreview {...collection} key={idx} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
