import React from "react";

import Button from "../../atoms/Button";

interface SubscribeModalProps {
  isOpen: boolean;
  runOnClose: () => void;
}

export default function SubscribeModal(props: SubscribeModalProps) {
  const { isOpen, runOnClose } = props;

  return (
    <div
      className={`${
        isOpen ? "" : "hidden"
      } fixed z-50 w-full h-full top-0 bottom-0 left-0 right-0 bg-black/70 transition ease-in-out duration-150 flex items-center justify-center`}
    >
      <div className="w-[300px] lg:w-[430px] h-fit bg-main-background flex flex-col py-5 px-7 items-center gap-4 rounded-xl -translate-y-32 lg:-translate-y-48">
        <p className="font-ptserif font-bold text-main-orange text-title3">
          THANK YOU!
        </p>
        <p className="font-ptserif text-main-blue text-center">
          You will be informed whenever we publish something new!
        </p>
        <div className="w-[80px]">
          <Button
            runOnClick={runOnClose}
            text="Okay"
            border="full"
            size="normal"
          />
        </div>
      </div>
    </div>
  );
}
