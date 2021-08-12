import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Table,TableBody,TableCell,TableContainer,TableRow,TableHead,Paper} from '@material-ui/core';
import {useSelector,useDispatch} from 'react-redux'
import {Edit} from '../../store/action/user'
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import {useLocation,useHistory} from 'react-router-dom'
import style from './edit2.module.css'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const CustomizedTables=({handle})=> {
  const classes = useStyles();
  const data=useSelector((state)=>state.user)
  const dispatch=useDispatch()
  const history=useHistory()  
    
  return (
    <div className={style.main}>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">index</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Mobile</StyledTableCell>
            <StyledTableCell align="center">Aadhar</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">CheckIn</StyledTableCell>
            <StyledTableCell align="center">CheckOut</StyledTableCell>
            <StyledTableCell align="center">Edit</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((user,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row" >{index}</StyledTableCell>
              <StyledTableCell align="center">{user.name}</StyledTableCell>
              <StyledTableCell align="center">{user.email}</StyledTableCell>
              <StyledTableCell align="center">{user.mobile}</StyledTableCell>
              <StyledTableCell align="center">{user.aadhar}</StyledTableCell>
              <StyledTableCell align="center">{user.address}</StyledTableCell>
              <StyledTableCell align="center">{user.checkIn}</StyledTableCell>
              <StyledTableCell align="center">{user.checkOut}</StyledTableCell>
              <StyledTableCell align="center">
               
                <Fab color="secondary" aria-label="edit">
                <EditIcon  onClick={(event)=>{
                  event.preventDefault()
                  dispatch(Edit(index))
                  handle()
                }}/>

              </Fab>
                </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default  CustomizedTables