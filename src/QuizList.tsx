import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import './App.css';
import { Link } from 'react-router-dom';

export function NewListItem(title: string, desc: string, image: string, id: string){
  return (
    <>
      <ListItem sx={{}} alignItems="flex-start">
          <Link to={`${id}`}>
            <img src={image}></img>
          </Link>
          <div>
            <Typography sx={{padding:"10px", fontSize:"18px"}}><a className='basicLink' href='https://youtube.com'>{desc}</a></Typography>
            <div className='authorDiv'>
              <Typography sx={{padding:"10px", fontSize:"10px"}}>Por Saddam Harrison</Typography>
            </div>
          </div>
        </ListItem>
        <Divider variant="inset" component="li" />
    </>
    
  )
}

export default function AlignItemsList() {
  return (
    <List sx={{ width: '100%', maxWidth: 560, bgcolor: 'background.paper' }}>
      {NewListItem(
        "hello", 
        "Cualquier fruta que eliges revelará quien eres en cobra kai", 
        "https://media.discordapp.net/attachments/949102944907829331/1036987973847224380/image_7.png",
        "cobra-kai-fruit"
      )} 
      
    </List>
  );
}
