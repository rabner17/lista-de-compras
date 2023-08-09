import React from 'react';

const ListItem = ({ item, onToggle, onDelete }) => {
  return (
    <div className="list-item">
      <span className={item.completed ? 'completed' : ''}>{item.text}</span>
      <button onClick={() => onToggle(item.id)}>
        {item.completed ? 'No comprado' : 'Comprado'}
      </button>
      <button onClick={() => onDelete(item.id)}>Eliminar</button>
    </div>
  );
};

export default ListItem;
