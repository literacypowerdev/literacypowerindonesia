import React, { useState } from "react";
import Image from "next/image";
import Button from "../../atoms/Button";
import SubscribeModal from "./SubscribeModal";

export default function Newsletter() {
  // Email validation
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const regex = /.+@.+\..+/;
  const onEmailChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(e.target.value);

    if (email.length === 0) {
      setIsEmailValid(false);
    } else if (email.match(regex)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  // Subscribe function
  const subscribe = () => {
    console.log(`${email} has subscribed`);
    setIsModalOpen(true);
  };

  return (
    <>
      <SubscribeModal
        isOpen={isModalOpen}
        runOnClose={() => setIsModalOpen(false)}
      />
      <div className="w-full h-fit py-5 bg-main-orange">
        <div className="w-11/12 lg:w-10/12 mx-auto lg:flex lg:gap-5 lg:justify-between">
          <div className="w-full max-w-[800px] text-left flex flex-col gap-3">
            <p className="text-base font-ptserif font-bold text-white">
              Be the first to know
            </p>
            <p className="font-ptserif text-white">
              Get exclusive offers, program opening updates, travel inspo,
              volunteer stories, scholarships, and competitions... Straight to
              your inbox!
            </p>
            <div className="w-full flex gap-3 items-center">
              <input
                onChange={onEmailChange}
                type="email"
                placeholder="Email"
                className="w-[180px] md:w-[250px] py-1 rounded-md bg-main-background text-main-orange px-4 placeholder:text-light-orange focus:outline-none focus:ring-2 focus:ring-light-orange focus:ring-offset-transparent focus:ring-offset-1"
              />
              <div className="w-[100px]">
                <Button
                  runOnClick={subscribe}
                  disable={!isEmailValid}
                  text="Subscribe"
                  border="rectangle"
                  size="normal"
                />
              </div>
            </div>
            <span
              className={`${isEmailValid ? "hidden" : ""} text-white -mt-2`}
            >
              Email not valid
            </span>
          </div>

          <div className="hidden items-center justify-center lg:flex">
            <Image src="/icon/logo.svg" alt="Logo" width={125} height={125} />
          </div>
        </div>
      </div>
    </>
  );
}
