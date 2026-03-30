import { useState } from "react";
import livros from "../Data";
import CaixaPesquisa from "./CaixaPesquisa";
import BotoesFiltro from "./BotoesFiltro";
import Card from "./Card";

const Biblioteca = () =>{
    const [busca, setBusca] = useState('');
    const [generoAtivo, setGeneroAtivo] = useState('');

    const livrosFiltrados = livros.filter((livro) =>{
        const correspondeNome = livros.nome.toLocaleLoweCase().includes(toLocaleLoweCase());
        const correspondeGenero = generoAtivo === 'Todos' || livro.genero === generoAtivo;
    })

    return(
        <div clssName="h-screen w-full flex flex-col bg-gray-100 p-6 overflow-hidden">
            <div className="flex felx-col gap-4 mb-8">
                <CaixaPesquisa busca={busca} setBusca={setBusca} />
                <BotoesFiltro setGeneroAtivo={setGeneroAtivo} generoAtivo={generoAtivo} />
            </div>

            <div clssName="flex flex-1 items-center overflow-x-auto pb-4 gap-6 custom-scrollbar">
                {livrosFiltrados.map((livros) =>(<Card Key={livro.id} livros={livros}/>))}
            </div>
        </div>
    )
}

export default Biblioteca;