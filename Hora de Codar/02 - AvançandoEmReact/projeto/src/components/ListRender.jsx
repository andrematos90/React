import React, { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Gol", "Civic", "Malibu", "Twingo", "Fusca"]);

  const [users] = useState([
    { id: 1, name: "andré", age: 34 },
    { id: 3, name: "lordao", age: 40 },
    { id: 5, name: "lauro antigo", age: 51 },
  ]);

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
