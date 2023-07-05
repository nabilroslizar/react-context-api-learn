"use client";

import React, { createContext, useContext, useState } from "react";

interface Props {
  children?: React.ReactNode;
}

export const DeleteModalContext = createContext({
  isOpen: false,
  toggleOpen: () => {}, //initialize empty function
});

export const DeleteModalProvider: React.FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <DeleteModalContext.Provider value={{ isOpen, toggleOpen }}>
      {children}
    </DeleteModalContext.Provider>
  );
};

export const useDeleteModal = () => useContext(DeleteModalContext);
