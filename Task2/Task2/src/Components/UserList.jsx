import React from "react";

function UserList({ users }) {
  return (
    <>
     {users.map((user) => (
        <div key={user.id} style={cardStyle}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>City: {user.address.city}</p>
        </div>
      ))}
    
    </>
    
  );
}

const cardStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  margin: "10px",
  borderRadius: "8px",
};

export default UserList;