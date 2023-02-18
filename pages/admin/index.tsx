import React, { useEffect } from 'react'
import Router from 'next/router'
const Cookie = require('js-cookie')

const index = () => {

    const allCookies = Cookie.get('token')

    useEffect(() => {
        if (!allCookies) {
            Router.push('/admin/login')
        } else if (allCookies) {
            Router.push('/admin/dashboard')
        }
    }, [])

}

export default index