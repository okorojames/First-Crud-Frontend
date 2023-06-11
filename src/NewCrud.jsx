import React, { useContext, useState } from "react";
import "./NewCrud.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BtnMotionVarients } from "./BtnMotionVarients";

const NewCrud = () => {
  //
  const { BtnVarients } = useContext(BtnMotionVarients);

  //
  const [newCrud, setNewCrud] = useState({
    title: "",
    description: "",
    author: "",
  });
  const navigate = useNavigate();
  const postCrud = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/crud/post-crud/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCrud),
      });
      console.log(res);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <motion.div
      className="my-4 container"
      exit={{
        x: -3000,
        originY: 0,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      }}
    >
      <form className="mx-auto" style={{ width: "100%" }} onSubmit={postCrud}>
        <input
          className="py-2 ps-2"
          type="text"
          placeholder="Title here"
          value={newCrud.title}
          onChange={(e) => setNewCrud({ ...newCrud, title: e.target.value })}
        />
        <textarea
          className="py-2 ps-2"
          rows="5"
          placeholder="Description here..."
          value={newCrud.description}
          onChange={(e) =>
            setNewCrud({ ...newCrud, description: e.target.value })
          }
          style={{ resize: "none" }}
        ></textarea>
        <input
          className="py-2 ps-2"
          type="text"
          placeholder="author"
          value={newCrud.author}
          onChange={(e) => setNewCrud({ ...newCrud, author: e.target.value })}
        />
        <motion.button
          className="btn btn-primary py-3 px-5 fs-4"
          variants={BtnVarients}
          initial="hidden"
          animate={{ x: 0 }}
          transition={{
            duration: 1.5,
            type: "spring",
            stiffness: 75,
            damping: 8.5,
          }}
        >
          Post
        </motion.button>
      </form>
    </motion.div>
  );
};

export default NewCrud;
