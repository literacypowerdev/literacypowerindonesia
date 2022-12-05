import React from 'react'
import Link from 'next/link'

const Sidebar = () => {


    const menuItems = [
        { id: 1, label: "Manage Buku", link: '/admin/dashboard/buku' },
        { id: 2, label: "Manage Review", link: '/admin/dashboard/review' },
        { id: 3, label: "Manage Proyek", link: '/admin/dashboard/proyek' },
        { id: 4, label: "Manage Galery", link: '/admin/dashboard/galery' },
        { id: 4, label: "Manage Subscribe", link: '/admin/dashboard/subscribe' },
    ]

    return (
        <div className='w-fit bg-very-light-orange h-fit p-6'>
            <div className=''>
                <div className='p-3 font-bold'>
                    <h1>Literacy Power Dashboard</h1>
                </div>
                {menuItems.map((item, index) => {
                    return (
                        <ul key={index} >
                            <Link href={item.link}>
                                <li className='cursor-pointer hover:bg-main-green hover:text-white p-2 font-medium'>{item.label}</li>
                            </Link>
                        </ul>
                    )
                })}
            </div>
        </div>
    )
}

export default Sidebar