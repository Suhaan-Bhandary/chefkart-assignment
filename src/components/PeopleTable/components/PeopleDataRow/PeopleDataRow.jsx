import { TableCell, TableRow } from '@mui/material';
import { useState } from 'react';

const PeopleDataRow = ({ person }) => {
  const [isActive, setIsActive] = useState(false);

  const handleRowClick = () => {
    setIsActive(!isActive);
  };

  return (
    <TableRow
      sx={{
        cursor: 'pointer',
        backgroundColor: isActive ? 'lightgray' : undefined,
      }}
      onClick={handleRowClick}
    >
      <TableCell align="center">{person.id}</TableCell>
      <TableCell>{person.first_name}</TableCell>
      <TableCell>{person.last_name}</TableCell>
      <TableCell>{person.first_name + person.last_name}</TableCell>
      <TableCell>{person.email}</TableCell>
      <TableCell>{person.mobile}</TableCell>
      <TableCell>{person['airport code']}</TableCell>

      <TableCell>{person.time}</TableCell>
      <TableCell sx={{ color: person.status === 'true' ? 'green' : 'red' }}>
        {person.status === 'true' ? 'True' : 'False'}
      </TableCell>
    </TableRow>
  );
};

export default PeopleDataRow;
