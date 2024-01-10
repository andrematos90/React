import MyComponent from "./MyComponent";

/* função clássica

function FirstComponent(){
    return (
        <div>
            <h1>My First Component</h1>
        </div>
    )
}
*/

 //com arrow function

const FirstComponent = () =>{
    return (
        <div>
            <h1>My First Component</h1>
            <MyComponent></MyComponent>
        </div>
    )
}


export default FirstComponent;