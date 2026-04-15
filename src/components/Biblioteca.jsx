import livros from "../Data";
import { useState } from "react";
import BotoesFiltro from "./BotoesFiltro";
import SeletorMulti from "./SeletorMulti";
import Card from "./Card";
import CaixaPesquisa from "./CaixaPesquisa";

const Biblioteca = () => {

    const [generoAtivo, setGeneroAtivo] = useState(["Todos"]);
    const [seletorAtivo, setSeletorAtivo] = useState(false);
    const [seletorRestrito, setSeletorRestrito] = useState(false);
    const [busca, setBusca] = useState("");

    const restrito = (seletor, livro) => {
        const restringeGeneros = seletor
            ? generoAtivo.every((genero) => livro.genero.includes(genero))
            : generoAtivo.some((genero) => livro.genero.includes(genero));

        return restringeGeneros;
    };

    const livrosFiltrados = livros.filter((livro) => {
        const correspondeNome = livro.nome.toLocaleLowerCase().includes(busca.toLocaleLowerCase());
        const correspondeGenero = generoAtivo.includes("Todos") || restrito(seletorRestrito, livro);

        return correspondeNome && correspondeGenero
    })

    return (
        <div className="h-screen w-full flex flex-col bg-gray-100 p-6 overflow-hidden">
            <div className="flex flex-col gap-4 mb-8">
                <CaixaPesquisa busca={busca} setBusca={setBusca} />
                <BotoesFiltro setGeneroAtivo={setGeneroAtivo} generoAtivo={generoAtivo} setSeletorAtivo={setSeletorAtivo} seletorAtivo={seletorAtivo} />
            </div>

            <div className="flex flex-row items-center justify-center gap-4 -mt-8">
                <SeletorMulti setSeletorAtivo={setSeletorAtivo} seletorAtivo={seletorAtivo} />
            </div>

            <div className="flex flex-1 items-center overflow-x-auto pb-4 gap-6 custom-scrollbar">
                {livrosFiltrados.map((livro) => (<Card key={livro.id} livro={livro} />))}
            </div>
        </div>
    )
}

export default Biblioteca;