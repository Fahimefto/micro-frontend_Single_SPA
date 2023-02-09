import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";

function DefaultExample() {
  useEffect(async () => {
    const users = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersJson = await users.json();
    setUsers(usersJson);
  }, []);

  const [users, setUsers] = useState([]);

  return (
    <ListGroup
      style={{ textAlign: "center", marginTop: "16px", margin: "50px" }}
      numbered
    >
      {users?.map((user) => (
        <ListGroup.Item variant="primary" key={user.id}>
          {user.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default DefaultExample;
