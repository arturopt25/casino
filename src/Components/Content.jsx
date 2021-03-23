import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import "./Content.css";


const useStyles = makeStyles({
    table: {
      minWidth: 650,
      height: 250,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      background: 'linear-gradient(45deg, #a2a0a7 80%, #c9c8cc 90%)',
      border: 0,
      color: 'white',
    },

    fuente: {
        fontSize: 50,
        color: 'white',
    },

  });
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    
  ];

const Content = () => {


    const classes = useStyles();


    return (
        <div>

<TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell align="right">Slot 1</TableCell>
            <TableCell align="right">Slot 2</TableCell>
            <TableCell align="right">Slot 3</TableCell>
            <TableCell align="right">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow className= {classes.fuente} key={row.name}>
              <TableCell className= {classes.fuente} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell className= {classes.fuente} align="right">{row.calories}</TableCell>
              <TableCell className= {classes.fuente} align="right">{row.fat}</TableCell>
              <TableCell className= {classes.fuente} align="right">{row.carbs}</TableCell>
              <TableCell className= {classes.fuente} align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
           
        </div>
    )
}

export default Content
