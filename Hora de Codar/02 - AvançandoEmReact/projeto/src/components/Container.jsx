const Container = ({children, myValue}) => {
    return(
        <>
        <h1>Titulo do Container</h1>
        {children}

        <h1>{myValue}</h1>
        </>
    );
}


export default Container;