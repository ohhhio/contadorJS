import { useState } from 'react';

<link rel="stylesheet" type="testeApp/css" href="styles.css"></link>

function Home() {
    return (
        <div>
            <h2>Bem vindo!</h2>
            <Cont />
            <h2>esse e o meu contador</h2>
        </div>
    )
}

function Cont() {
    const [contador,setCont] = useState(1);

    function addCont() {
        setCont(contador+1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={addCont}>Adicionar</button>
        </div>
    )
}

function Pagina() {
    return <Cont />
}   
export default Home