import { useEffect } from "react";
import "./Cursor.css";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const onMouseMove = (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    document.addEventListener("mousemove", onMouseMove);
    return () => document.removeEventListener("mousemove", onMouseMove);
  }, []);

  return <div className="cursor"></div>;
};

export default Cursor;
