import React from 'react'


const SearchFilter = () => {

    






    return (
        <div className='container'>
            {/* <div className='search max-w-[600px] rounded-2xl py-3 px-4 shadow-md flex text-light-orange items-center justify-start gap-2 m-auto bg-white'>
                
                <svg width="20" height="21" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9371 0C21.6219 0 27.8728 6.32381 27.8728 14.0983C27.8728 17.7662 26.4814 21.1116 24.2045 23.6223L28.6848 28.1454C29.1041 28.5696 29.1055 29.2559 28.6862 29.68C28.4773 29.8943 28.2011 30 27.9263 30C27.653 30 27.3782 29.8943 27.1679 29.6829L22.6335 25.1085C20.2482 27.041 17.2238 28.198 13.9371 28.198C6.25232 28.198 0 21.8727 0 14.0983C0 6.32381 6.25232 0 13.9371 0ZM13.9371 2.17164C7.43581 2.17164 2.1466 7.5211 2.1466 14.0983C2.1466 20.6754 7.43581 26.0263 13.9371 26.0263C20.437 26.0263 25.7262 20.6754 25.7262 14.0983C25.7262 7.5211 20.437 2.17164 13.9371 2.17164Z" fill="#DD8D5A" />
                </svg>

                <p>Search</p>
            </div> */}
            <div className='wrapper search max-w-[600px] rounded-2xl py-3 px-4 shadow-md flex text-light-orange items-center justify-start gap-2 m-auto bg-white'>
                <svg width="20" height="21" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9371 0C21.6219 0 27.8728 6.32381 27.8728 14.0983C27.8728 17.7662 26.4814 21.1116 24.2045 23.6223L28.6848 28.1454C29.1041 28.5696 29.1055 29.2559 28.6862 29.68C28.4773 29.8943 28.2011 30 27.9263 30C27.653 30 27.3782 29.8943 27.1679 29.6829L22.6335 25.1085C20.2482 27.041 17.2238 28.198 13.9371 28.198C6.25232 28.198 0 21.8727 0 14.0983C0 6.32381 6.25232 0 13.9371 0ZM13.9371 2.17164C7.43581 2.17164 2.1466 7.5211 2.1466 14.0983C2.1466 20.6754 7.43581 26.0263 13.9371 26.0263C20.437 26.0263 25.7262 20.6754 25.7262 14.0983C25.7262 7.5211 20.437 2.17164 13.9371 2.17164Z" fill="#DD8D5A" />
                </svg>
                <input
                    type="search"
                    name="search-form"
                    id="search-form"
                    className="search-input w-full focus:outline-none"
                    placeholder="Search" />
            </div>
        </div>
    )
}

export default SearchFilter