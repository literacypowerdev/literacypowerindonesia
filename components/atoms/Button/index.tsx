import React from "react";

interface ButtonProps {
  text: string;
  size: "normal" | "large";
  border: "full" | "rectangle";
  link?: boolean;
  disable?: boolean;
  runOnClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const { text, disable, link, runOnClick, border, size } = props;
  const style = {
    normal: "py-1",
    large: "py-2",
    full: "rounded-full",
    rectangle: "rounded-md",
  };

  const styles = `bg-main-green ${style[size]} h-fit w-full ${style[border]} flex justify-center items-center transition-colors duration-150 ease-in-out hover:bg-[#596E67] active:bg-[#42524C]`;

  //   Button as link
  //   Bungkus componenya pake tag Link
  if (link) {
    return (
      <div className={`${styles} cursor-pointer`}>
        <p className="text-white">{text}</p>
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
      <p className="text-white">{text}</p>
    </button>
  );
}
