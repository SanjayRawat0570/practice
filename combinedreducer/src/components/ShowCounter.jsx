 import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/actions'

export default function ShowCounter() {
    const state = useSelector(state=>state)
    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={()=>dispatch(increment())}>+</button>
        {state.count}
        <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  )
}
