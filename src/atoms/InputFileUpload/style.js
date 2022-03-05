import styled, { css } from 'styled-components';

export const FileDropArea = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 450px;
  max-width: 100%;
  padding: 25px;
  border: 1px dashed rgba(0, 0, 0, 0.4);
  border-radius: 3px;
  transition: 0.2s;
  margin-bottom: 10px;
  
  ${(props) => props.isActive && css`
    background-color: rgba(0, 0, 0, 0.05);
  `}
`;

export const FakeBtn = styled.span`
  flex-shrink: 0;
  background-color: rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding: 8px 15px;
  margin-right: 10px;
  font-size: 12px;
  text-transform: uppercase;
`;

export const FileMessage = styled.span`
  font-size: small;
  font-weight: 300;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FileErrorMessage = styled.div`
  font-size: small;
  font-weight: 300;
  color: #A90645;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 10px;
`;

export const FileInput = styled.input.attrs(() => ({
    type: 'file'
}))`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  cursor: pointer;
  opacity: 0;
  &:focus {
    outline: none;
  }
`;

export const RemoveFile = styled.span`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
`;
