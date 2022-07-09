import { TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';

const Home = () => {
    const [name, setname] = useState('');
    const [address, setaddress] = useState('');
    return (
        <div>
        <TextField label="Name"  onChange={(e)=>{
            setname(e.target.value)}
            } />
              <TextField label="from"  onChange={(e)=>{
            setaddress(e.target.value)}
            } />
            <h2>hello i am {name} i am from {address}</h2>
        </div>
    );
}

export default Home;
