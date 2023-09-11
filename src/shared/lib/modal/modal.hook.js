import { useContext } from 'react';
import { ModalContext } from './modal.provider';

export const useModalContext = () => {
  return useContext(ModalContext);
};
