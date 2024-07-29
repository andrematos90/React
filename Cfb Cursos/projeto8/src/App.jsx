import "./App.css";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import React, { useState, useEffect } from "react";

function App() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const url = window.location.href;
    const res = url.split("?");
    setPage(res[1]);
  });


  const LinksPaginas=(p)=>{
    if(p==1){
      window.open('https://localhost:5173?1','_self')
    }else if(p==2){
      window.open('https://localhost:5173/2','_self')
    }else if(p==3){
      window.open('https://localhost:5173?3', '_self')
    }else{
      window.open('https://localhost:5173?0', '_self')
    }
  }

  const retornarPagina = () => {
    if (page == 1) {
      return <Page1 />;
    } else if (page == 2) {
      return <Page2 />;
    } else if (page == 3) {
      return <Page3 />;
    } else {
      return (
        <div>
          <button onClick={()=>{LinksPaginas(1)}}>Page 1</button>
          <button onClick={()=>{LinksPaginas(2)}}>Page 2</button>
          <button onClick={()=>{LinksPaginas(3)}}>Page 3</button>
          <button onClick={()=>{LinksPaginas(0)}}>Page 0</button>
         
        </div>
      );
    }
  };

  return <>{retornarPagina()}</>;
}

export default App;

/*


OUTRA FORMA

import "./App.css";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import React, { useState, useEffect } from "react";

function App() {
  const [page, setPage] = useState(0);

  const retornarPagina = () => {
    if (page == 1) {
      return <Page1 />;
    } else if (page == 2) {
      return <Page2 />;
    } else if (page == 3) {
      return <Page3 />;
    } else {
      return (
        <div>
          <button onClick={()=>{setPage(1)}}>Page 1</button>
          <button onClick={()=>{setPage(2)}}>Page 2</button>
          <button onClick={()=>{setPage(3)}}>Page 3</button>
          <button onClick={()=>{setPage(0)}}>Home</button>
        </div>
      );
    }
  };

  return <>{retornarPagina()}</>;
}

export default App;



*/
