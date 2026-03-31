import { useState } from "react";
import livros from "../Data";
import CaixaPesquisa from "./CaixaPesquisa";
import BotoesFiltro from "./BotoesFiltro";
import Card from "./Card";

const Biblioteca = () =>{

    // Estado que armazena o texto digitado na caixa de pesquisa
    const [busca, setBusca] = useState('');
     // Estado que armazena o gênero selecionado no filtro (ex: "Romance", "Ficção", etc.)
    const [generoAtivo, setGeneroAtivo] = useState('');

     // Filtra a lista de livros com base no texto digitado e no gênero selecionado
    const livrosFiltrados = livros.filter((livro) =>{
        const correspondeNome = livros.nome.toLocaleLoweCase().includes(toLocaleLoweCase());
     // Verifica se o gênero ativo é "Todos" (sem filtro) ou se o livro pertence ao gênero selecionado
        const correspondeGenero = generoAtivo === 'Todos' || livro.genero === generoAtivo;
    })

    return(
        <div clssName="h-screen w-full flex flex-col bg-gray-100 p-6 overflow-hidden">
            <div className="flex flex-col gap-4 mb-8">
                <CaixaPesquisa busca={busca} setBusca={setBusca} />
                <BotoesFiltro setGeneroAtivo={setGeneroAtivo} generoAtivo={generoAtivo} />
            </div>

            <div clssName="flex flex-1 items-center overflow-x-auto pb-4 gap-6 custom-scrollbar">
                {livrosFiltrados.map((livros) =>(<Card key={livro.id} livros={livros}/>))}
            </div>
        </div>
    )
}

export default Biblioteca;