import React, { useEffect } from 'react'
import Router from 'next/router'
const index = () => {

    useEffect(() => {
        Router.push('/admin/login')
    }, [])

}

export default index