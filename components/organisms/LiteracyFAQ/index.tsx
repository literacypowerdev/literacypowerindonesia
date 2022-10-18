import React, { useState } from 'react'
import AccordionParent from '../../../public/icon/accordion-parent.svg'
import AccordionChild from '../../../public/icon/accordion-child.svg'
import Image from 'next/dist/client/image';


const LiteractFAQ = () => {
    // state

    const [isOpen, setIsOpen] = useState(false);




    // state
    return (
        <div>
            <div className="w-full flex flex-col gap-1 ">
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full m-auto bg-main-orange mb-1 hover:bg-light-orange transition-all duration-150 ease-in-out cursor-pointer px-5 py-2 rounded-[20px] flex justify-between shadow-md"
                >
                    <div className='flex gap-2'>
                        <Image
                            src={AccordionParent}
                            width={20}
                            height={20} />
                        <h2 className="text-white font-ptserif font-bold">Bagaimana Kamu Bisa Berdampak?</h2>
                    </div>
                    <img src="/icon/accordion-arrow.svg" alt="" className="w-[16px]" />
                </div>

                <div className={`w-full flex flex-col gap-1 mb-2 ${isOpen ? "" : "hidden"}`}>
                    <div className='w-full m-auto bg-main-background mb-1 hover:bg-light-orange transition-all duration-150 ease-in-out cursor-pointer px-5 py-2 rounded-[20px] flex justify-start shadow-md gap-2'>
                        <Image
                            src={AccordionChild}
                            width={20}
                            height={20} />
                        <h1>tes</h1>
                    </div>

                </div>
            </div>



        </div>
    )
}

export default LiteractFAQ