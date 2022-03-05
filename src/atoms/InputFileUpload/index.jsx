import React, { useState, useRef, useEffect } from 'react';
import {
  FileDropArea, FakeBtn, FileMessage, FileInput, FileErrorMessage, RemoveFile
} from './style';
import { getLabelValue } from '../../utils/common';

const InputFileUpload = ({ onChange, accept, value, labels }) => {
  const inputFile = useRef();
  const [selectedFile, setSelectedFile] = useState();
  const [isActive, setIsActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const dropArea = useRef();

  useEffect(() => {
    if(inputFile.current && !value) {
      setSelectedFile(null);
      inputFile.current.value = '';
    }
  }, [value])

  useEffect(() => {
    if (dropArea) {
      const area = dropArea.current;
      area.addEventListener('dragenter', () => setIsActive(true));
      area.addEventListener('focus', () => setIsActive(true));
      area.addEventListener('click', () => setIsActive(true));

      area.addEventListener('dragleave', () => setIsActive(false));
      area.addEventListener('blur', () => setIsActive(false));
      area.addEventListener('drop', () => setIsActive(false));
    }
  }, [dropArea]);

  const handleOnchange = (event) => {
    const { target: { files } } = event;
    if(files.length) {
      setSelectedFile(files[0]);
      if (files[0].size <= 1000000000) {
        if (onChange) onChange(files[0]);
        setErrorMessage(false);
      } else {
        setErrorMessage(true);
      }
    }
  };

  const onClickRemoveFile = () => {
    if (onChange) onChange('');
    setErrorMessage(false);
  };

  return (
    <>
      <FileDropArea isActive={isActive} ref={dropArea}>
        <FakeBtn>{getLabelValue('btn_choose_a_file', labels)}</FakeBtn>
        <FileMessage>{selectedFile ? selectedFile.name : getLabelValue('file_drag_area_label', labels)}</FileMessage>
        <FileInput ref={inputFile} accept={accept} onChange={handleOnchange} />
        {value && <RemoveFile onClick={onClickRemoveFile} className="icon-close" />}
      </FileDropArea>
      {errorMessage && <FileErrorMessage>{getLabelValue('file_error_message', labels)}</FileErrorMessage>}
    </>
  );
};

export default InputFileUpload;
