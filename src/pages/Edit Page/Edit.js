import React from 'react'
import {Navbar} from '../../components/Navbar'
import {useSelector,useDispatch,} from 'react-redux'
import {User} from '../../store/action/user'
import {useState,useEffect} from 'react'
import style from './Edit.module.css'
import Data from './edit2'
import {useLocation,useHistory} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';


const Edit=()=>{
    const dispatch=useDispatch()
    const editData =useSelector((state)=>state.edit)
    const [userData,setUser]=useState({
        name:"",
        email:"",
        mobile:"",
        aadhar:"",
        address:"",
        checkIn:"",
        checkOut:""
    })
    // console.log(userData);
    //////-----------------------click----------------///////////////////
    const [state,setState]=useState(false)

    const handle=()=>{
        setState(true)
    }  
    ////////---------------////////////////
    useEffect(() => {
        if(!editData){
            return<h1>No</h1>
         }
         if(editData){
            setUser({
                name:editData[0]?.name,
                email:editData[0]?.email,
                mobile:editData[0]?.mobile,
                aadhar:editData[0]?.aadhar,
                address:editData[0]?.address,
                checkIn:editData[0]?.checkIn,
                checkOut:editData[0]?.checkOut
            })
         }
        
    }, [editData])

/////////////////////////------------------edit data---------------///////////////////////////
    
////////////////////////=---------------------------=///////////////////////////////
    const handleClick=()=>{
        if(
            userData.name==="" || 
            userData.email==="" ||userData.mobile==="" || 
            userData.aadhar==="" || userData.address==="" || 
            userData.checkIn==="" || userData.checkOut ===""
        ){
            return alert("Fill the all details")
        }
        dispatch(User(userData))

        setUser({
            name:"",
            email:"",
            mobile:"",
            aadhar:"",
            address:"",
            checkIn:"",
            checkOut:''
        })
        setState(false)
    }
    
    const handleChange=(event)=>{
        const {name,value}=event.target;
        setUser((preState)=>{
            return{ 
                ...preState,
                [name]:value
            }
        })
    }
    const history=useHistory()
    ///////////////----material style---///////
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
          },
        },
      }));
    
      const classes = useStyles();
      
////////////////----------------//////////////
    return(
        <div>
            <Navbar/> 
            <Data handle={handle}/>
            {   
                state?
                    <div className={style.main}>  
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField  id="standard-basic" label="Name" type="text" className={style.dis} placeholder="name"  value={userData?.name} name="name" onChange={handleChange}/>
                            <TextField id="standard-basic" label="Email" type="text" className={style.dis} placeholder="Email"  value={userData?.email} name="email" onChange={handleChange}/>
                            <TextField id="standard-basic" label="Mobile" type="text" className={style.dis} placeholder="mobile"  value={userData?.mobile} name="mobile" onChange={handleChange}/>
                            <TextField id="standard-basic" label="Aadhar" type="text" className={style.dis} placeholder="Aadhar"  value={userData?.aadhar} name="aadhar" onChange={handleChange}/>
                            <TextField id="standard-basic" label="Address" type="text" className={style.dis} placeholder="Address"   value={userData?.address} name="address" onChange={handleChange}/>
                            <TextField id="standard-basic" label="CheckIn" type="date" className={style.dis}  value={userData?.checkIn} name="checkIn" onChange={handleChange}/>
                            <TextField id="standard-basic" label="CheckOut" type="date" className={style.dis}  value={userData?.checkOut} name='checkOut' onChange={handleChange}/>      
                            <Button variant="contained" color="primary" onClick={handleClick} size="small" className={classes.button}>Update</Button>
                        </form>
                    </div>
            :<h1>No data</h1>
            }
        </div>
    )
}

export default Edit