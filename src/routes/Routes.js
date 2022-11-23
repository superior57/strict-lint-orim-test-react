import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import Main from '../layouts/Main';
import Blog from '../pages/blog';
import Customer from '../pages/customer';
import Home from '../pages/home';

export default function Routes() {
  return (
    <Main>
      <Switch>
        <Route path={'/home'} element={<Home />} />
        <Route path={'/blog/:blogId'} element={<Blog />} />
        <Route path={'/customer/:customerId'} element={<Customer />} />
      </Switch>
    </Main>
  );
}
