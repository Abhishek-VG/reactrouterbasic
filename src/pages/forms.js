import React from "react";
import { useNavigate } from "react-router-dom";

export const Form = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    console.log("MOUNT");
    return () => {
      console.log("UNMOUNT");
    };
  });

  const onSubmit = () => {
    navigate("/one");
  };

  return (
    <div>
      Form
      <form onSubmit={onSubmit}>
        <input required={true} />
        <button>Submit</button>
      </form>
    </div>
  );
};
