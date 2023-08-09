import React from 'react';
import ListItem from './ListItem';

const ShoppingList = ({ items, onToggle, onDelete }) => {
  return (
    <div className="shopping-list">
      {items.map(item => (
        <ListItem key={item.id} item={item} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ShoppingList;
