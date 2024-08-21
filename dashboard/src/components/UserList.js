
import React, { useState } from 'react';
function UserList({ users, onEdit, onDelete }) {
  const [isOpen, setIsOpen] = useState(null); // Tracks which dropdown is open

  const toggleDropdown = (userId) => {
    if (isOpen === userId) {
      setIsOpen(null);
    } else {
      setIsOpen(userId);
    }
  };

  return (
    <div className="user-list">
      {users.map((user) => (
        <div key={user.id} className="user-item">
          <img
            src={`${process.env.PUBLIC_URL}/${user.imageName}`}
            alt={user.name}
            className="user-image"
          />
          <div className="user-details">
            <span>{user.name}</span>
            <small>{user.email}</small>
          </div>
          <div className="action-menu">
            <button
              className="menu-button"
              onClick={() => toggleDropdown(user.id)}
            >
              <i className="fas fa-ellipsis-v"></i>
            </button>
            {isOpen === user.id && (
              <div className="dropdown-menu">
                <button
                  className="dropdown-item"
                  onClick={() => onEdit(user.id)}
                >
                  <i className="fas fa-edit"></i> Edit
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => onDelete(user.id)}
                >
                  <i className="fas fa-trash"></i> Delete
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserList;

