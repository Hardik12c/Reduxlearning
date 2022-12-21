import React from 'react'
import {withdrawmoney,depositmoney} from '../state/action-creators/index';
import { useSelector,useDispatch } from 'react-redux';

export default function Body() {
  const dispatch=useDispatch();
  const Balance=useSelector(state=>state.amount);
  return (
    <div>
        <h1>Your Cart</h1>
        <button className='btn btn-primary mx-4' onClick={()=>{dispatch(depositmoney(100))}}>+</button>
        <span>your Balance {Balance}</span>
        <button className='btn btn-primary mx-4' onClick={()=>{dispatch(withdrawmoney(100))}}>-</button>
    </div>
  )
}
