import {useSelector} from 'react-redux'
import {Navbar} from '../../components/Navbar'
import { Delete } from '../../store/action/user';
import {useDispatch} from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Box from '@material-ui/core/Box';



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Customer=()=> {
  const classes = useStyles();
  const data=useSelector((state)=>state.user) 
  const dispatch=useDispatch() 
 
  
    let randomimages=[]
      randomimages[0]="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvILB0N96luQid2_TuhRtrCrr5A788gKvjkg&usqp=CAU";
      randomimages[1]="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOd256TcC6vcaQ99TYzoP0pBbch9_Q-bbrmw&usqp=CAU";
      randomimages[2]="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80";
      randomimages[3]="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhh-adaJ2kcDUvfbA_FWvoPHbmijfvR2hvwA&usqp=CAU";
      randomimages[4]="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy1uZTBlxjOfVEiZsIt9FSo_bkxgEb6_OslQ&usqp=CAU";
      randomimages[5]="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5_f-3Npwnj40B6u8O8WmcX8swxRqUS8ncQg&usqp=CAU";
      randomimages[6]="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC2yLsax2357l_Sli3jpe-kg1mdyJV9A3JjA&usqp=CAU";
      randomimages[7]="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3s-ygrSUGjha3wNKKQpepTt22hxzpJDSVqg&usqp=CAU";
      randomimages[8]="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwbs3QIwA-AVQIWssYIHQpZTQb8ygwpt-3hg&usqp=CAU";
      const ma=Math.floor(Math.random()*randomimages.length)
      const ndd=randomimages[ma]
      console.log(ma);
    
    
  return (
      <div>
          <Navbar/>
          <Box className="hi" display="flex" 
          flexDirection="row" flexWrap='wrap' 
          justifyContent="space-evenly" 
            p={1} m={1}>
          {data?.map((user,index)=>{
              
            return (<Card className={classes.root} id="ma"style={{marginBottom:'10px'}} key={index}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={randomimages[Math.floor(Math.random()*randomimages.length)]}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {user.name}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="h2">
                    {user.email}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="h2">
                    {user.mobile}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="h2">
                    {user.aadhar}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="h2">
                    {user.checkIn}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="h2">
                    {user.checkOut}
                  </Typography>
                  <Typography variant="body1" color="textSecondary" component="p">
                    {user.address}
                  </Typography>
                </CardContent>
              </CardActionArea>
            <IconButton aria-label="delete" onClick={()=>dispatch(Delete(user))}>
                <DeleteIcon />
            </IconButton>
            </Card>
           )
          })}
     </Box>
    </div>
  );
}

export default  Customer