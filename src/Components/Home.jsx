import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useState } from 'react';


const Home = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [name, setname] = useState('');
    const [address, setaddress] = useState('');
    const [study , setstudy] = useState("");
    const [collage , setcollage] = useState("");
    const [relagion , setrelagion] = useState("");
    const [Hobbies , setHobbies] = useState("");
    const [proffesion , setproffesion] = useState("");

    return (
        <div style={{display:"flex", justifyContent:"center" , gap:"10px"}}>
        <Box sx={{ height:"650px", width:"40%", margin:"10px" , border:"2px solid red" }}>
               <TextField  sx={{width:"90%" , margin:"10px"}} label="Name"  onChange={(e)=>{
            setname(e.target.value)}
            } />
              <TextField sx={{width:"90%" , margin:"10px"}} label="from"  onChange={(e)=>{
            setaddress(e.target.value)}
            } />
            <TextField  sx={{width:"90%" , margin:"10px"}} label="study"  onChange={(e)=>{
            setstudy(e.target.value)}
            } />
              <TextField  sx={{width:"90%" , margin:"10px"}} label="collage"  onChange={(e)=>{
            setcollage(e.target.value)}
            } />
             <TextField  sx={{width:"90%" , margin:"10px"}} label="relagion"  onChange={(e)=>{
            setrelagion(e.target.value)}
            } />
               <TextField  sx={{width:"90%" , margin:"10px"}} label="Hobbies"  onChange={(e)=>{
            setHobbies(e.target.value)}
            } />
                <TextField  sx={{width:"90%" , margin:"10px"}} label="proffesion"  onChange={(e)=>{
            setproffesion(e.target.value)}
            } />
           <div>
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />

    </div>
        </Box>
        <Box sx={{width:"40%" , height:"650px" , margin:"10px" , border:"2px solid red"}}>
        {selectedImage && (
        <div>
        <img alt="not fount" width={"250px"} style={{height:"250px", marginTop:"20px" ,border:"2px solid red " ,borderRadius:"50%"}} src={URL.createObjectURL(selectedImage)} />
        <br />
        </div>
      )}
      <Box sx={{margin:"auto" ,  marginTop:"50px" , width:"500px" , height:"400px"}}>
      <h2>{name} is from {address}. He is studying {study} at {collage}. He was raised in a {relagion} family that had little to no belief in God, or believed in a harsh deity. He harbors feelings of resentment towards God because of difficult trials in his life, but is willing to give religion and spirituality another try. his Hobbies are {Hobbies}.he is a {proffesion} .</h2>
      </Box>
            
        </Box>
     
           
           
        </div>
    );
}

export default Home;
