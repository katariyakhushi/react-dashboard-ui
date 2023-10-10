import React from "react";
import { useNavigate } from "react-router-dom";
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import "./TableData.css";

function TableData() {
  const navigate = useNavigate();

  const handleButtonClick = ({ name, calories, fat, carbs, protein }) => {
    navigate(`/company?name=${name}&calories=${calories}&fat=${fat}&carbs=${carbs}&protein=${protein}`);
  };

  function createData(name, avatar, calories, fat, carbs, protein, moreInfo) {
    return { name, calories, avatar, fat, carbs, protein, moreInfo };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 'More Info 1'),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 'More Info 2'),
    createData('Eclair', 262, 16.0, 24, 6.0, 'More Info 3'),
    createData('Cupcake', 305, 3.7, 67, 4.3, 'More Info 4'),
    createData('Gingerbread', 356, 16.0, 49, 3.9, 'More Info 5'),
  ];

  return (
      <div>
        <div> <input type="text"  placeholder="Search for companies...."  className="search-bar"/>
        </div>
       
      <div className="table-container">
         
       <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableCell>Avtar</TableCell>
            <TableCell>Company Name</TableCell>
            <TableCell>Employees</TableCell>
            <TableCell>Industry</TableCell>
            <TableCell>Website</TableCell>
            <TableCell>More</TableCell>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell>
                  <Avatar alt={row.name} src={row.avatar} />
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.calories}</TableCell>
                <TableCell>{row.fat}</TableCell>
                <TableCell>{row.carbs}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="warning"
                    onClick={() => {
                      handleButtonClick({
                        name: row.name,
                        calories: row.calories,
                        fat: row.fat,
                        carbs: row.carbs,
                        protein: row.protein,
                      });
                    }}
                    style={{ fontSize: '14px', height: '25px', width: '80px', margin: '10px' }}
                  >
                    Company
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      
      </TableContainer>
    </div>
  
  </div>
  );
}

export default TableData;
