import React from 'react'
import style from './../header/Header.module.css'

const Header = () => {
  return (
    <div className={style.header}>
        <div className={style.hist}>História</div>
        <div className={style.abou}>About</div>
        <div className={style.soci}>Seja sócio</div>
        <div className={style.par}>Parceiros</div>
        <div className={style.log}>Login</div>
    </div>
  )
}

export default Header;