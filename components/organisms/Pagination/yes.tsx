import React, { useState, useEffect } from 'react'
import contoh from './contohFile.json'

interface UserData {
    id?: number;
    title?: string;
    content?: string;
    email?: string;
    gender?: string;
}

const Yes = () => {

    const [dataPagination, setDataPagination] = useState<UserData[]>([])
    const fetchItems = () => {
        setDataPagination(contoh)
    }
    useEffect(() => {
        fetchItems()
    },[])

  return (
    <div>
        {dataPagination.map((items: any, id: any) => {
            return(
                <div key={id}>
                    <h1>{items.email}</h1>
                    <p>{items.gender}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Yes;