import React from 'react'
import { useNavigate } from 'react-router-dom';
import Signin from './Signin';

const Dashborad = () => {
    let navigate = useNavigate();
    navigate('/redirected-component');
  return (
    <div>
    <Signin/>
    </div>
  )
}

export default Dashborad