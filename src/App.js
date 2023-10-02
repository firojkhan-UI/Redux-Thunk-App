import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDataAction } from './redux/products/productDataAction'


function App () {
  const dispatch = useDispatch()
  const product = useSelector( (state) => state)
  const state = useSelector( (state) => state.products)

  useEffect( () => {
    dispatch(fetchDataAction())
  },[])

  console.log(state,"PPPPPP")

  return (
    <>
    <h1>Fetched Data</h1>
    </>
  )
}

export default App
