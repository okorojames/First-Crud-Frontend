import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./assets/useFetch";
import { BtnMotionVarients } from "./BtnMotionVarients";
import { motion } from "framer-motion";

const UpdateCrud = () => {
  //
  const { BtnVarients } = useContext(BtnMotionVarients);

  //
  const navigate = useNavigate();

  //
  const { id } = useParams();

  // setting the various crud data values
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");

  //initial crud before update state
  const [crud, setCrud] = useState();

  //fetching a single crud data with the id
  useEffect(() => {
    const getSingleCrud = async () => {
      try {
        const res = await fetch(
          `https://crud-backend-grmu.onrender.com/crud/get-crud/${id}`
        );
        const data = await res.json();
        setCrud(data);
        setTitle(data.title);
        setDescription(data.description);
        setAuthor(data.author);
      } catch (err) {
        console.log(err);
      }
    };
    getSingleCrud();
  }, []);

  //

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://crud-backend-grmu.onrender.com/crud/update-crud/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, author, description }),
        }
      );
      console.log(res);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  //rendering the form for the crud infomation update.
  return (
    crud && (
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
        <form
          className="mx-auto"
          style={{ width: "100%" }}
          onSubmit={handleUpdate}
        >
          <input
            className="py-2 ps-2"
            type="text"
            placeholder="update title here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="py-2 ps-2"
            rows="5"
            placeholder="Description here..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ resize: "none" }}
          ></textarea>
          <input
            className="py-2 ps-2"
            type="text"
            placeholder="author here..."
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
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
            Update
          </motion.button>
        </form>
      </motion.div>
    )
  );
};

export default UpdateCrud;
