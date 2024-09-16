//css
import styles from "./CreatePost.module.css";

//hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [imagem, setImage] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.CreatePost}>
      <h2>Criar Post</h2>
      <p>Escreva o que você quer compartilhar!</p>

      <form onSubmit={handleSubmit}>
        <label>
          <span> Título:</span>
          <input
            type="text"
            name="title"
            required
            placeholder="Pense em um bom título.."
            onChange={() => setTitle(e.target.value)}
          />
        </label>

        <label>
          <span>Diga algo sobre esse post:</span>
          <textarea
            type="text"
            name="body"
            required
            placeholder="O que você quer compartilhar.."
            onChange={() => setBody(e.target.value)}
          />
        </label>

        <label>
          <span>URl da imagem:</span>
          <input
            type="text"
            name="image"
            required
            placeholder="URL da imagem.."
            onChange={() => setImagem(e.target.value)}
          />
        </label>

        <label>
          <span>Tags:</span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Adicione tags (separdas por virgulas).."
            onChange={() => setTags(e.target.value)}
          />
        </label>

        {!loading && <button className="btn">Cadastrar</button>}
       
      </form>
    </div>
  );
};

export default CreatePost;
