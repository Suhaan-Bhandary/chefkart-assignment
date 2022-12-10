import { useMemo, useState } from 'react';
import usePeopleData from './hooks/usePeopleData';
import PeopleDataRow from './components/PeopleDataRow/PeopleDataRow';
import TableCellSort from './components/TableCellSort/TableCellSort';

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { Box } from '@mui/system';


const PeopleTable = () => {
  const [data, isLoading] = usePeopleData();

  const [sortedKeyName, setSortedKeyName] = useState('id');
  const [isAscending, setIsAscending] = useState(true);

  // Sorting the data on every render only if the parameters are changed
  let sortedData = useMemo(() => {
    const direction = isAscending ? 1 : -1;
    if (sortedKeyName === 'id') {
      return data.sort((a, b) => (a.id - b.id) * direction);
    }

    if (sortedKeyName === 'time') {
      return data.sort(
        (a, b) => (new Date(a.time) - new Date(b.time)) * direction
      );
    }

    return data.sort(
      (a, b) =>
        ('' + a[sortedKeyName]).localeCompare(b[sortedKeyName]) * direction
    );
  }, [data, sortedKeyName, isAscending]);

  const handleSortOnClick = (keyName) => {
    // First find the keyName by which it is to be sorted
    setSortedKeyName(keyName);
    setIsAscending(keyName === sortedKeyName ? !isAscending : true);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table aria-label="Todo-Table">
          <TableHead>
            <TableRow>
              <TableCellSort
                align="center"
                keyName="id"
                text="ID"
                sortedKeyName={sortedKeyName}
                isAscending={isAscending}
                handleSortOnClick={handleSortOnClick}
              />
              <TableCellSort
                keyName="first_name"
                text="First Name"
                sortedKeyName={sortedKeyName}
                isAscending={isAscending}
                handleSortOnClick={handleSortOnClick}
              />
              <TableCellSort
                keyName="last_name"
                text="Last Name"
                sortedKeyName={sortedKeyName}
                isAscending={isAscending}
                handleSortOnClick={handleSortOnClick}
              />
              <TableCell>Full Name</TableCell>
              <TableCellSort
                keyName="email"
                text="Email"
                sortedKeyName={sortedKeyName}
                isAscending={isAscending}
                handleSortOnClick={handleSortOnClick}
              />
              <TableCellSort
                keyName="mobile"
                text="Mobile"
                sortedKeyName={sortedKeyName}
                isAscending={isAscending}
                handleSortOnClick={handleSortOnClick}
              />
              <TableCellSort
                keyName="airport code"
                text="Airport Code"
                sortedKeyName={sortedKeyName}
                isAscending={isAscending}
                handleSortOnClick={handleSortOnClick}
              />
              <TableCellSort
                keyName="time"
                text="Time"
                sortedKeyName={sortedKeyName}
                isAscending={isAscending}
                handleSortOnClick={handleSortOnClick}
              />
              <TableCellSort
                keyName="status"
                text="Status"
                sortedKeyName={sortedKeyName}
                isAscending={isAscending}
                handleSortOnClick={handleSortOnClick}
              />
            </TableRow>
          </TableHead>

          <TableBody>
            {sortedData?.map((person) => (
              <PeopleDataRow key={person.id} person={person} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PeopleTable;
