import React from "react";

export const PageTwo = () => {
  React.useEffect(() => {
    console.log("MOUNT");
    return () => {
      console.log("UNMOUNT");
    };
  });
  return <span>I am Page two</span>;
};
