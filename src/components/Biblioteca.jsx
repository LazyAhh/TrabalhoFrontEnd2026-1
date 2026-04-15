import livros from "../Data";
import { useState } from "react";
import BotoesFiltro from "./BotoesFiltro";
import Card from "./Card";
import CaixaPesquisa from "./CaixaPesquisa";

const Biblioteca = () => {

    const [generoAtivo, setGeneroAtivo] = useState('Todos');
    const [busca, setBusca] = useState('');

    const livrosFiltrados = livros.filter((livro) =>{
        const correspondeNome = livro.nome.toLocaleLowerCase().includes(busca.toLocaleLowerCase());
        const correspondeGenero = generoAtivo === 'Todos' || livro.genero === generoAtivo;

       return correspondeNome && correspondeGenero
     })

    return (
        <div className="h-screen w-full flex flex-col bg-gray-100 p-6 overflow-hidden">
            <div className="flex flex-col gap-4 mb-8">
                <CaixaPesquisa busca={busca} setBusca={setBusca} />
                <BotoesFiltro setGeneroAtivo={setGeneroAtivo} generoAtivo={generoAtivo} />
            </div>

            <div className="flex flex-1 items-center overflow-x-auto pb-4 gap-6 custom-scrollbar">
                {livrosFiltrados.map((livro) => (<Card key={livro.id} livro={livro} />))}
            </div>
        </div>
    )
}

export default Biblioteca;