import React from 'react';
import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';
import { CellPill, TableContainer, NoData } from './style';
import PlaceholderLoader from '../../atoms/PlaceholderLoader';

const Table = ({
  columns,
  data,
  title,
  fixedHeader,
  onRowClick,
  customStyles = {},
  noTableHead,
  isLoading,
  noDataComponent = <NoData>'Non ci sono dati da visualizzare'</NoData>,
  defaultSortField = null,
  defaultSortAsc = true,
  persistTableHead
}) => (
    <TableContainer clickable={onRowClick}>
      <PlaceholderLoader isLoading={isLoading || (data[0] && data[0].isLoading)} />
      <DataTable
        title={title}
        noHeader={!title}
        noTableHead={noTableHead}
        columns={columns}
        data={data}
        fixedHeader={fixedHeader}
        fixedHeaderScrollHeight={fixedHeader && '50vh'}
        onRowClicked={onRowClick}
        customStyles={customStyles}
        noDataComponent={noDataComponent}
        defaultSortField={defaultSortField}
        defaultSortAsc={defaultSortAsc}
        persistTableHead={persistTableHead}
      />
    </TableContainer>
  );

const newColumn = ({
  title: name,
  field: selector = '',
  sortable = true,
  right = false
}) => ({
  name: name || selector,
  selector: selector.toLowerCase(),
  sortable,
  right
});
Table.createColumns = (columns = []) => {
  const cols = [];
  (columns || []).forEach((col = {}) => cols.push({ ...col, ...newColumn(col) }));
  return cols;
};
Table.CellPill = CellPill;

const newData = ({
  id = Math.random(), title, label, name
}) => ({
  id,
  title: title || label || name
});
Table.createData = (data = []) => {
  const dataset = [];
  (data || []).forEach((record = {}) => dataset.push({ ...record, ...newData(record) }));
  return dataset;
};

Table.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  columns: PropTypes.array,
  data: PropTypes.array,
  fixedHeader: PropTypes.bool,
  noTableHead: PropTypes.bool,
  isLoading: PropTypes.bool,
  onRowClick: PropTypes.func,
  noDataComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  defaultSortField: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(null)
  ]),
  defaultSortAsc: PropTypes.bool,
  persistTableHead: PropTypes.bool
};

Table.defaultProps = {
  columns: [],
  data: [],
  fixedHeader: true,
  noTableHead: false
};

export default Table;
