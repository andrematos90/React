import React from 'react'

const Formulario = (
{
  nome, 
  setNome,
  email, 
  setEmail, 
  idade, 
  setIdade, 
  profissao,
  setProfissao,
  descricao,
  setDescricao,
  onSubmit
}
  ) => {

    //gerando opçoes para o campo de idade
    const opcoesIdade=[]
    for(let i = 0; i <= 100; i++){
      opcoesIdade.push(<option key={i} value={i}>{i}</option>);
    }


    
  return (
    <div>
        <form onSubmit={onSubmit}>
        <label>
            <span>Nome:</span>
            <input type="text" name='name' value={nome} onChange={(e)=> setNome(e.target.value)}/>
        </label>
        <label>
            <span>Email:</span>
            <input type="text" name='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
        </label>
        <label>
            <span>Idade:</span>
            <select value={idade} onChange={(e)=> setIdade(e.target.value)}>
              {opcoesIdade}
            </select>
        </label>
        <label>
            <span>Nome:</span>
            <select value={profissao} onChange={(e)=> setProfissao(e.target.value)}>
              <option value="">Selecione sua Profissão</option>
              <option value="desenvolvedor">Desenvolvedor</option>
              <option value="engenheiro">Engenheiro</option>
              <option value="fisico">Físico Teórico</option>
              <option value="jogador">Jogador</option>
              <option value="mecanico">Mecânico</option>
            </select>
        </label>
        <label>
          <span>Descricao</span>
          <textarea value={descricao} onChange={(e)=>{setDescricao(e.target.value)}} rows="5" cols="50"></textarea>
        </label>

        <div>
          <button type='submit'>Enviar</button>
        </div>
        
        </form>
    </div>
  )
}

export default Formulario