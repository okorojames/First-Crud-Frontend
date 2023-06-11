import { Link } from "react-router-dom";
import useFetch from "./assets/useFetch";
import { motion } from "framer-motion";
import { useContext } from "react";
import { BtnMotionVarients } from "./BtnMotionVarients";

const Home = () => {
  //
  const { BtnVarients } = useContext(BtnMotionVarients);

  //
  const {
    data: cruds,
    error,
    pending,
  } = useFetch("https://crud-backend-grmu.onrender.com/crud/get-cruds");
  const deleteCrud = async (id) => {
    try {
      const res = await fetch(
        `https://crud-backend-grmu.onrender.com/crud/delete-crud/${id}`,
        {
          method: "DELETE",
        }
      );
      console.log(res);
      location.reload();
    } catch (err) {
      console.log(error);
    }
  };
  return (
    <motion.div
      className="d-flex flex-column gap-5"
      initial={{ x: "-1000px" }}
      animate={{ x: 0, originY: 0 }}
      transition={{ duration: 1, when: "beforeChildren", staggerChildren: 1 }}
      exit={{
        x: -3000,
        originY: 0,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      }}
    >
      {cruds && cruds.length === 0 ? (
        <p className="text-center fs-3">No Data Here...</p>
      ) : (
        cruds &&
        cruds.map((crud) => (
          <motion.div
            initial={{ x: "-2000px" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
            key={crud._id}
          >
            <div className="card p-3 d-flex justify-content-between">
              <div className="card-context">
                <div className="title-icon">
                  <div className="h3 text-success fs-4">{crud.title}</div>
                  <div className="icons d-flex gap-4">
                    <i
                      className="fa-solid fa-trash d-block fs-3 text-danger"
                      onClick={() => deleteCrud(crud._id)}
                    ></i>
                    <Link to={`/update-crud/${crud._id}`}>
                      <i className="fa-regular fa-pen-to-square fs-3 text-success"></i>
                    </Link>
                  </div>
                </div>
                <p className="lead text-primary fs-4">{crud.description}</p>
                <p className="fs-5 lead text-secondary">{crud.author}</p>
              </div>
            </div>
          </motion.div>
        ))
      )}
      <motion.div
        className="align-self-center"
        variants={BtnVarients}
        initial="hidden"
        animate="visible"
      >
        <Link to="/new-crud">
          <button
            className="btn btn-danger py-3 fs-5 px-5"
            style={{ borderRadius: "10px" }}
          >
            New Crud +
          </button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Home;
