import React, { Suspense } from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import Main from '../layouts/Main';
const Blog = React.lazy(() => import('../pages/blog'));
const Customer = React.lazy(() => import('../pages/customer'));
const Home = React.lazy(() => import('../pages/home'));

export default function Routes() {
  return (
    <Main>
      <Suspense fallback={<div>{'Loading...'}</div>}>
        <Switch>
          <Route path={'/home'} element={<Home />} />
          <Route path={'/blog/:blogId'} element={<Blog />} />
          <Route path={'/customer/:customerId'} element={<Customer />} />
        </Switch>
      </Suspense>
    </Main>
  );
}
