import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home'


export default function App() {

  // Input: [1,2,4,5], [3,3,4], [2,3,4,5,6]
  // Output: 4

  function findOverlappingValues(arr1: Array<number>, arr2: Array<number>, arr3: Array<number>): number {
    let overlappingValue: number = 0


    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          overlappingValue = arr1[i]
        }
      }
    }
    return arr3[arr3.indexOf(overlappingValue)]
  }

  console.log(findOverlappingValues([2,3,4,5,17,6], [3,3,4,17], [17,2,5,4]))

  return (
    <div className="App">
      <h1>А это главная</h1>
      <ul>
      </ul>
      <Routes>
        <Route path="/home" Component={Home} />
      </Routes>
    </div>
  )
}


