import React, { useEffect } from 'react';
import Router from 'next/router';
import Cookie from 'js-cookie';

const Index = () => {
  const allCookies = Cookie.get('token');

  useEffect(() => {
    if (!allCookies) {
      Router.push('/admin/login');
    } else if (allCookies) {
      Router.push('/admin/dashboard');
    }
  }, [allCookies]); // Include allCookies in the dependency array

  return null; // or return some JSX if needed
};

export default Index;
