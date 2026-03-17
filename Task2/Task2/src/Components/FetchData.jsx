import React, { useEffect, useState } from "react";
import axios from "axios";
import UserList from "./UserList";

function FetchData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
  <>
  <h1>User Data</h1>
      <UserList users={users} />
  </>
  );
}

export default FetchData;