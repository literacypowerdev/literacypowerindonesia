import React from "react";

interface ButtonProps {
  text: string;
  size: "normal" | "large";
  border: "full" | "rectangle";
  link?: boolean;
  disable?: boolean;
  runOnClick?: () => void;
  animate?: boolean;
}

export default function Button(props: ButtonProps) {
  const { text, disable, link, runOnClick, border, size, animate } = props;

  const style = {
    normal: "py-1",
    large: "py-2",
    full: "rounded-full",
    rectangle: "rounded-md",
    animate: 'animate-bounce'
  };

  const styles = `${disable
      ? "opacity-70 cursor-default hover:bg-main-green active:bg-main-green"
      : ""
    } bg-main-green ${style[size]} h-fit w-full ${style[border]
    } flex justify-center items-center transition-colors duration-150 ease-in-out hover:bg-[#596E67] active:bg-[#42524C] `;

  //   Button as link
  //   Wrap this component with a Link tag
  if (link) {
    return (

      <div className={`${styles} cursor-pointer ${animate ? "animate-bounce" : ''}`}>
        <p className="text-white font-ptserif">{text}</p>
      </div>
    );
  }

  //   Button calls function
  return (
    <button
      disabled={disable}
      onClick={runOnClick ?? (() => null)}
      className={styles}
    >
      <p className="text-white font-ptserif">{text}</p>
    </button>
  );
}
