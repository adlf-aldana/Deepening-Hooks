import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      const coords = { x, y };
      console.log(coords);
    };
    // console.log("Message Mounted");
    // window.addEventListener("mousemove", (e) => {
    //   console.log(e.x, e.y);
    // });
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      //   console.log("Message UnMounted");
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
    </>
  );
};
