import React from 'react';
import Router from 'next/router';
const Cookie = require('js-cookie')
import jwtDecode from 'jwt-decode';

export const withTokenValidation = (WrappedComponent: any) => (props: any) => {
  const token = typeof window !== 'undefined' ? Cookie.get('token') : '';

  // Validate the token
  if (typeof window !== 'undefined' && !token) {
    Router.push('/admin');
  } 
  if (token) {
    const decodedToken: any = jwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
      Cookie.remove('token');
    }
  }

  return <WrappedComponent {...props} />;
}

export default withTokenValidation;