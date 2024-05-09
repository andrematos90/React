import React, { useState } from 'react'

const ListRender = () => {

    const [list] = useState(["Gol", "Civic", "Malibu", "Twingo", "Fusca"]);
  return (
    <div>
        <ul>
            {list.map((item)=>(
                <li>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender