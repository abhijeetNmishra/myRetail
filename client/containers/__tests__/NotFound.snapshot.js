/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import NotFound from '../NotFound';

test('NotFound renders correctly', () => {
  const notFound = renderer.create(
    <NotFound></NotFound>
  ).toJSON();
  expect(notFound).toMatchSnapshot();
});
