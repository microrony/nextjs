import React from 'react'

const TypeScript = () => {

  let calcSum: (a: number, b: number, third?: number) => number;

  calcSum = (first: number, second: number) => {
    return first + second;
  }

  console.log(calcSum(2, 2, 2))
  
  






  return (
    <div>
      
    </div>
  )
}

export default TypeScript
