import React from "react";
import { useDeleteModal } from "../context/DeleteModalContext";

const DeleteModal = () => {
  const { toggleOpen } = useDeleteModal();
  return (
    <div className="max-w-xl w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-y-8 border border-black px-12 py-8">
      <div className="flex flex-row justify-between items-center w-full font-bold ">
        <div className="text-3xl"> Delete Modal</div>
        <button className="text-2xl" onClick={toggleOpen}>
          X
        </button>
      </div>
      <form action="">
        <input
          type="text"
          name="text"
          id="text"
          className="border border-black rounded-xl px-4 py-2 my-2 mr-6"
        />
        <button className="bg-purple-400 px-4 py-2 text-white">Submit</button>
      </form>
    </div>
  );
};

export default DeleteModal;
