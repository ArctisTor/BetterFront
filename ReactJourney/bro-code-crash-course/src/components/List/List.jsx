import React from "react";
import "./List.css";
import PropTypes from 'prop-types'

const List = ( {items = [], category = ''}) => {
  const itemList = items;
  const itemCategory = category;

  //fruits.sort((a,b) => a.name.localeCompare(b.name)) //ALPHABETICAL
  //fruits.sort((a,b) => b.name.localeCompare(a.name)) // REVERSE ALPHABETICAL

  //fruits.sort((a,b) => a.calories - b.calories) // NUMERIC
  //fruits.sort((a,b) => b.calories - a.calories) // REVERSE NUMERIC

  //const lowCalFruits = itemList.filter((fruit) => fruit.calories <= 100);

  const listItems = itemList.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name} : &nbsp; <b>{fruit.calories}</b>
    </li>
  ));

  return (
    <>
      {listItems.length > 0 ? (
        <div>
          <h3 className="list-category">{itemCategory ? itemCategory : 'No Category'}</h3>
          <ul className="list-items">{listItems}</ul>
        </div>
      ) : (
        <> </>
      )}
    </>
  );
};

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number}))
}

export default List;
