import cookies from 'next-cookies'

export function unauthPage(context) {

    return new Promise(resolve => {
        const allCookies = cookies(context);
        if (allCookies.token)
            return {
                redirect: {
                    permanent: true,
                    destination: '/admin/dashboard'
                }
            }
            return resolve('tes')
    })



}