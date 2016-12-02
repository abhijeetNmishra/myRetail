/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import ProductTitle from '../index';

test('ProductTitle renders correctly', () => {
  const title = 'test title';
  const productTitle = renderer.create(
    <ProductTitle title={title}></ProductTitle>
  ).toJSON();
  expect(productTitle).toMatchSnapshot();
});
