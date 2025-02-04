import React from "react";

function Food() {
  const food1 = "Orange";
  const food2 = "Banana";

  const foodList = [food1, food2];

  return (
    <>
      <ul>
        <li>Apple</li>
        {foodList.map((item, index) => 
          <li key={index}> {item} </li>
        )}
      </ul>
    </>
  );
}

export default Food;
