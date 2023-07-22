import React from 'react';

export interface modalProps {
  active?: "Kesehatan" | "Pendidikan" | "Lingkungan" | "Ekonomi";
};

const modalData = [
   {
    title: "Program Pendidikan",
    icon: ''
   },
   {
    title: "Program Lingkungan",
    icon: ''
   },
   {
    title: "Program Kesehatan",
    icon: ''
   },
   {
    title: "Program Ekonomi",
    icon: ''
   },
];

const modalStyle = 'text-red-500';
const hover = 'hover:text-white hover:bg-main-orange';

const Modal = ({ active }: modalProps) => {
  return (
    <div className={`${modalStyle}`}>
      <div className="modalContent">
        <div className="heading">
          <h1>Literacy Power Programs</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, magnam!</p>
        </div>
        <div className="programs">

        </div>
      </div>
    </div>
  )
};

export default Modal;