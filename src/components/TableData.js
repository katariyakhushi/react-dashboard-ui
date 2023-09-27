import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function TableData() {
    function createData(name, calories, fat, carbs, protein, moreInfo) {
        return { name, calories, fat, carbs, protein, moreInfo };
    }
    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 'More Info 1'),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 'More Info 2'),
        createData('Eclair', 262, 16.0, 24, 6.0, 'More Info 3'),
        createData('Cupcake', 305, 3.7, 67, 4.3, 'More Info 4'),
        createData('Gingerbread', 356, 16.0, 49, 3.9, 'More Info 5'),
    ];

    return (
        <div className="table">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Company Name</TableCell>
                            <TableCell align="right">Employees</TableCell>
                            <TableCell align="right">Industry</TableCell>
                            <TableCell align="right">Websites</TableCell>
                            <TableCell align="right">More</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">
                                    {/* Use Link to navigate to CompanyInfo */}
                                    <Link to="/companyInfo" className="btn btn-success">
                                        Back to Home
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default TableData;
