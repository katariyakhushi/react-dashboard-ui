import React from 'react';
import Topbar from '../Topbar';
import { useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import styles from './CompanyInfo.module.css'; // Import your custom CSS module

function CompanyInfo() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  return (
    <div>
      <Topbar />
      <Paper elevation={3} className={styles['company-info-paper']}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Company Information
        </Typography>
        <TableContainer>
          <Table className={styles['company-info-table']}>
            <TableHead>
              <TableRow>
                <TableCell>Property</TableCell>
                <TableCell>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>{params.get('name')}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Calories</TableCell>
                <TableCell>{params.get('calories')}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Fat</TableCell>
                <TableCell>{params.get('fat')}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Carbs</TableCell>
                <TableCell>{params.get('carbs')}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Protein</TableCell>
                <TableCell>{params.get('protein')}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}

export default CompanyInfo;
