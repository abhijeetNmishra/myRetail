/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import ProductImage from '../index';

test('Layout renders correctly', () => {
  const images = {
   "AlternateImages": [
    {
     "image": "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt01"
    },
    {
     "image": "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt02"
    },
    {
     "image": "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt03"
    },
    {
     "image": "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt04"
    },
    {
     "image": "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt05"
    },
    {
     "image": "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt06"
    },
    {
     "image": "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt07"
    }
   ],
   "PrimaryImage": [
    {
     "image": "http:\/\/target.scene7.com\/is\/image\/Target\/14263758"
    }
   ],

   "imageCount": "8",
   "source": "internal"
  }

  const productImage = renderer.create(
    <ProductImage images={images}></ProductImage>
  ).toJSON();
  expect(productImage).toMatchSnapshot();
});
