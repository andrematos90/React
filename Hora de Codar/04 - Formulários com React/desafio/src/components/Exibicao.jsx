import React from 'react'

const Exibicao = ({dados}) => {
  return (
    <div>
        <p><strong>Nome:</strong>{dados.nome}</p>
        <p><strong>Email:</strong>{dados.email}</p>
        <p><strong>Idade:</strong>{dados.idade}</p>
        <p><strong>Profissao:</strong>{dados.profissao}</p>
        <p><strong>Descrição:</strong>{dados.descricao}</p>
    </div>
  )
}

export default Exibicao