import { TableCell, TableSortLabel } from '@mui/material';

const TableCellSort = ({
  keyName,
  text,
  align = 'left',
  sortedKeyName,
  isAscending,
  handleSortOnClick,
}) => {
  return (
    <TableCell key={keyName} align={align}>
      <TableSortLabel
        active={keyName === sortedKeyName}
        direction={isAscending ? 'asc' : 'desc'}
        onClick={() => handleSortOnClick(keyName)}
      >
        {text}
      </TableSortLabel>
    </TableCell>
  );
};

export default TableCellSort;
