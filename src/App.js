import React, { useState, useEffect } from 'react';
import './App.css';
import ShoppingList from './ShoppingList';

function App() {
  const storedItems = JSON.parse(localStorage.getItem('shoppingListItems')) || [];
  const [items, setItems] = useState(storedItems);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    localStorage.setItem('shoppingListItems', JSON.stringify(items));
  }, [items]);

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() === '') return;
    const newItem = { id: Date.now(), text: inputValue, completed: false };
    setItems([...items, newItem]);
    setInputValue('');
  };

  const handleToggleItem = itemId => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleDeleteItem = itemId => {
    setItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  return (
    <div className="container">
      <div className="app">
        <h1 className="custom-title">LISTA DE COMPRAS</h1> {/* Aplica la clase "custom-title" al título */}
        <div className="add-item">
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button onClick={handleAddItem}>Agregar</button>
        </div>
        <ShoppingList
          items={items}
          onToggle={handleToggleItem}
          onDelete={handleDeleteItem}
        />
      </div>
    </div>
  );
}

export default App;
