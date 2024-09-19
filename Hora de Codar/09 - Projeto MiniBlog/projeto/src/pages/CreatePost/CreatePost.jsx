//css
import styles from "./CreatePost.module.css";

//hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocument";


const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const{user} = useAuthValue();

 const{insertDocument, response} = useInsertDocument("posts");

 const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    //validadte imagem URL
    try {
      new URL(image)
      
    } catch (error) {
      setFormError("A imagem precisa ser uma URL")
      return;
    }



    //criar array de tags
    const tagsArray = tags.split(",").map((tag)=> tag.trim().toLowerCase());



    //checar todos os valores
    if (!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!");
    }

    if(formError) return;


    insertDocument({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName
    })

    console.log(user.uid, user.displayName)


    // redirectate homepage
    navigate("/");



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
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          <span>Diga algo sobre esse post:</span>
          <textarea
            type="text"
            name="body"
            required
            placeholder="O que você quer compartilhar.."
            onChange={(e) => setBody(e.target.value)}
          />
        </label>

        <label>
          <span>URl da imagem:</span>
          <input
            type="text"
            name="image"
            required
            placeholder="URL da imagem.."
            onChange={(e) => setImage(e.target.value)}
          />
        </label>

        <label>
          <span>Tags:</span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Adicione tags (separdas por virgulas).."
            onChange={(e) => setTags(e.target.value)}
          />
        </label>

        {!response.loading && <button className="btn">Cadastrar</button>}
        {response.loading && <button className="btn" disabled>Aguarde..</button>}
        {response.error && <p className="error">{response.error}</p>}
        {formError && <p className="error">{formError}</p>}
       
      </form>
    </div>
  );
};

export default CreatePost;
