import ChildrenComponent from "./ChildrenComponent";

const ParentComponent =  () =>{
    const string = "Eu Sou o compomente pai"

    return(
        <div>
            <h2>{string}</h2>
            <ChildrenComponent></ChildrenComponent>
        </div>

    )
}

export default ParentComponent;