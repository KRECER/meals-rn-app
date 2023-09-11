import { createContext, useState } from 'react';

const defaultModalData = {
  isVisible: false,
  type: null,
  data: null
};

const defaultContextValues = {
  setModalData: (data) => {
    return {
      ...defaultModalData,
      ...data
    };
  },
  modalData: {
    ...defaultModalData
  }
};

export const ModalContext = createContext(defaultContextValues);

export const ModalProvider = ({ children }) => {
  const [modalData, setModalData] = useState(() => defaultModalData);

  return <ModalContext.Provider value={{ modalData, setModalData }}>
    {children}
  </ModalContext.Provider>;
};
