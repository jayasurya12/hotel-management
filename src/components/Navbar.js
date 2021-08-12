import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'
import Button from '@material-ui/core/Button';

export const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <h1>Hotel Management</h1>
            <ul>
            <Link to='/' ><Button className={styles.btn} variant="contained" color="primary" >Home</Button></Link>
            <Link to='/customer'><Button className={styles.btn} variant="contained" color="primary">Customer</Button></Link>
            <Link to='/edit'><Button className={styles.btn} variant="contained" color="primary" >Edit</Button></Link>
            <Link to='/about'><Button className={styles.btn}  variant="contained" color="primary" >About</Button></Link>
            </ul>
        </nav>
    )
}

 
