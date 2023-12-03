import {useState} from "react";
import {ModalBackdrop, ModalContainer, ModalView} from "./ModalStyle";

export default function CTVModal({ isOpen, setIsOpen, children }) {
  return (
    <>
      {isOpen ? (
        <ModalContainer>
          <ModalBackdrop
            onClick={() => setIsOpen(false)}
          />
          <ModalView>
            {children}
          </ModalView>
        </ModalContainer>
        ) : null}
    </>
  );
};
