import cookies from 'next-cookies'



export function unauthPage(context: any) {
    const allCookies = cookies(context);
    return new Promise(resolve => {
        if (allCookies.token)
          return context.res.writeHead(302, {
            Location: '/admin/dashboard'
          }).end();
          return resolve('unauthorized')
      })
}

export const unauthPageReverse = (context: any) => {
    const allCookies = cookies(context);
    return new Promise(resolve => {
        if (!allCookies.token)
          return context.res.writeHead(302, {
            Location: '/admin/login'
          }).end();
          return resolve('unauthorized')
      })
}