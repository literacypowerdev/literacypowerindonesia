import React from 'react';
import Router from 'next/router';
const Cookie = require('js-cookie')

export const withTokenValidation = (WrappedComponent: any) => (props: any) => {
  const token = typeof window !== 'undefined' ? Cookie.get('token') : '';

  // Validate the token
  if (typeof window !== 'undefined' && !token) {
    Router.push('/admin');
  }

  return <WrappedComponent {...props} />;
}

export default withTokenValidation;