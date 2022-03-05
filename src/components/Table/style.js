import styled, { css } from 'styled-components';


const commonCss = css`
  color: ${({ theme }) => theme.colors.primary.black};
  font-family: ${({ theme }) => theme.fontset.arial};
  font-size: 12px;
  font-weight: normal;
  line-height: 1.17;
`;
export const TableContainer = styled.div`
  position: relative;
  .rdt_Table {
    background-color: ${({ theme }) => theme.colors.primary.white};
    ${commonCss};
  }
  
  .rdt_TableCol, .rdt_TableCol_Sortable {
    background-color: ${({ theme }) => theme.colors.custom.background};
    ${commonCss};
    color: ${({ theme }) => theme.colors.primary.lightblack};

    & span {
      opacity: 1;
    }
    
  }
  
  .rdt_TableRow {
    border-bottom-color: ${({ theme }) => theme.colors.primary.lightestgray};
    ${commonCss};
    
    cursor: ${({ clickable }) => (clickable ? 'pointer' : 'unset')};
    
    &:nth-child(even) {
      background-color: ${({ theme }) => theme.colors.custom.background};
    }
    
    &:hover {
      background-color: ${({ theme }) => theme.mixin.rgba(theme.colors.primary.lightestgray, 0.5)};
    }
    
    transition: all 125ms ease-in-out;
  }
  
  .rdt_TableBody{
    overflow-y: overlay;
    overflow-x: hidden;
    
    &::-webkit-scrollbar {
      -webkit-appearance: none;
    }
    &::-webkit-scrollbar:vertical {
      width: 11px;
    }
    &::-webkit-scrollbar:horizontal {
      height: 11px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      border: 2px solid white; /* should match background, can't be transparent */
      background-color: rgba(0, 0, 0, .5);
    }
  }
`;

export const CellPill = styled.div`
  background-color: ${({ counter, theme }) => (Number(counter || 0) > 0 ? theme.colors.secondary.brightgreen : theme.colors.primary.red)};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.primary.white};
  padding: 3px 0;
  height: 20px;
  width: 27px;
  text-align: center;
  font-size: 12px;
`;

export const NoData = styled.div`
  margin: 10px 0;
`;
