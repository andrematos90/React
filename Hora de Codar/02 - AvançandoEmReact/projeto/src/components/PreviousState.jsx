import React, { useState } from 'react';

export const PreviousState = () => {

    const [users, setUsers] = useState([
      { id: 1, name: "andré", age: 34 },
      { id: 2, name: "lordao", age: 40 },
      { id: 3, name: "lauro antigo", age: 51 },
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 3) + 1; // Corrigindo o cálculo do número aleatório

        setUsers((prevUsers) =>{
            return prevUsers.filter((user) => randomNumber !== user.id); // Corrigindo a comparação
        });
    };
  
    return (
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.age}
            </li>
          ))}
        </ul>
        <button onClick={deleteRandom}>Deletar usuário aleatoriamente</button>
      </div> 
    );
};



export default PreviousState;