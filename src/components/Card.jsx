import { useState } from "react";
import CardGenero from "./CardGenero";
import CardImagem from "./CardImagem";
import CardInformacoes from "./CardInformacoes";
import ImagemAberta from "./ImagemAberta";

const Card = ({ livro }) => {
    const [imagemAberta, setImagemAberta] = useState(false);

    return (
        <div className="w-[350px] h-[500px] shrink-0 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
            <div className="relative h-[200px] w-full bg-gray-200">
                <CardImagem imagem={livro.imagem} alt={livro.nome} />
                <CardGenero genero={livro.genero} />
            </div>

            <div className="p-5 flex flex-col flex-1 overflow-hidden">
                <CardInformacoes nome={livro.nome} autor={livro.autor} paginas={livro.paginas} descricao={livro.descricao} />
            </div>

            {imagemAberta && (
                <ImagemAberta setImagemAberta={setImagemAberta} imagem={livro.imagem} alt={livro.nome} />
            )}
        </div>
    );
}

export default Card;