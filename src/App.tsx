import React from "react";

function App() {
  //return //<div className="App"></div>;
  //Найти второе минимальное число;
  const arr = [-100, 2, 34, 43, 4, 0, 1, 1, 1, 1, 1, 15, -15, -14];
  let min = arr[0];
  let secMin = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] < secMin && arr[i] !== min) {
      secMin = arr[i];
    }
  }

  console.log(min);
  console.log(`${secMin} - вторая минималка`);
}

export default App;
