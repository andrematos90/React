import { Link } from 'react-router-dom';
import {useFetch} from '../hooks/useFetch.jsx'

const Home = () => {

  const url = "http://localhost:5000/products"

  const {data:items}=useFetch(url);

  return (
    <div>
      <h1>Produtos</h1>

      <ul>
        {items && items.map((item)=>(
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <Link to={`/products/${item.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Home