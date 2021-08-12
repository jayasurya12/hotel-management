import React from 'react';
import {useState} from 'react'
import style from './Home.module.css'
import {useDispatch} from 'react-redux'
import {User} from '../../store/action/user'
import {Navbar} from '../../components/Navbar'
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const Home = () => {
   
    /////////
    const [user, setUser] = useState({
        name:"",
        email:"",
        mobile:"",
        aadhar:"",
        address:"",
        checkIn:'',
        checkOut:""
    })
    const dispatch=useDispatch();

    const handleClick=(event)=>{
        // event.preventDefault();
        if(user.name==="" || user.email ==='' || user.mobile==="" 
        || user.aadhar==='' || user.address==='' || user.checkIn==='' || user.checkOut===''){
            return alert("Fill the all details")
        }
        console.log(user);
        dispatch(User(user))
        setUser({
            name:"",
            email:"",
            mobile:"",
            aadhar:"",
            address:"",
            checkIn:"",
            checkOut:""
        })
    }

    const handleChange=(event,date)=>{

        const {name,value}=event.target;
        const de=date
        setUser((preState)=>{
            return{
                ...preState,
                [name]:value,
                
            }
        })
    }
    const useStyles = makeStyles((theme) => ({
        button: {
          margin: theme.spacing(1),
        },
      }));

    const classes = useStyles();
///////////////----material style---///////
    const useStyle = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
          },
        },
    }));
    const classe = useStyle();
////////////////----------------//////////////
    return (
        <div className={style.container}>
            <Navbar/>
            <div className={style.formModel}>
                <form className={classe.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Name" name="name" value={user.name} onChange={handleChange}/><br/>
                    <TextField id="standard-basic" label="Email" name="email" value={user.email} onChange={handleChange}/><br/>
                    <TextField id="standard-basic" label="Mobile" name="mobile" value={user.mobile} onChange={handleChange}/><br/>
                    <TextField id="standard-basic" label="Aadhar" name="aadhar" value={user.aadhar} onChange={handleChange}/><br/>
                    <label>Check In Date:</label>
                    <TextField id="standard-basic" type="date"  name="checkIn" value={user.checkIn} onChange={handleChange}/><br/>
                    <label>Check Out Date:</label>
                    <TextField id="standard-basic" type="date" name="checkOut" value={user.checkOut} onChange={handleChange}/><br/>
                    <TextField id="standard-basic" label="Address" name="address" value={user.address} onChange={handleChange}/><br/>  
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        className={classes.button}
                        startIcon={<SaveIcon />} onClick={()=>handleClick()}>Save
                    </Button>
                </form> 
            </div>
        </div>
    )
}
export default Home



