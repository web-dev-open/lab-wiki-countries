
import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
        <Link to="/">
            <Button variant="contained">Home</Button>
        </Link>
    </div>
  )
}

export default NavBar