import { useState } from "react";

const Card = ({livro}) =>{
    const [imagemAberta, setImagemAberta] = useState(false);

    return(
        <div className="w-[350px] h-[500px] shrink-0 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
            <div className="relative h-[200px] w-full bg-gray-200">
                <img
                    src={livro.imagem || 'https://placehold.co/600x400?text=Imagem+não+encontrada'}
                    alt={livro.nome}
                    className="w-full h-full object-cover cursor-zoom-in hover:scale-105 transition-transform duration-500"
                    onClick={() => setImagemAberta(true)}
                />

                <span className="absolute top-3 right-3 
                bg-blue-600 text-white text-xs font-bold
                px-2 py-1 rounded-full uppercase">
                    {livro.genero || "Nenhum gênero disponível"}
                </span>
            </div>
            
            <div className="p-5 flex flex-col flex-1 overflow-hidden">
                <h2 className="text-xl font-bold text-gray-800 leading-tight">{livro.nome || "Nenhum nome disponível"}</h2>
                <p className="text-sm text-gray-800 italic mb-2">por {livro.autor || "nennhum autor disponível"}</p>

                <div className="text-xs text-blue-500 font-semibold mb-3">
                    {livro.paginas || "Sem número de "} páginas
                </div>

                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                    <p className="text-gray-600 text-sm pr-2 overflow-y-auto custom-scrollbar leading-relaxed">
                        {livro.descricao || "Nenhuma descrição disponível"} 
                    </p>
                </div>
            </div>

            {imagemAberta && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300"
                    onClick={() => setImagemAberta(false)}
                >
                    <div className="relative max-w-4xl max-h-full">
                        <button
                            className="absolute -top-10 right-0 text-white text-lg font-bold hover:text-red-400"
                            onClick={() => setImagemAberta(false)}
                        >
                            Fechar [X]
                        </button>

                        <img 
                            src={livro.imagem || 'https://placehold.co/600x400?text=Imagem+não+encontrada'}
                            alt={livro.nome || "Nenhum nome disponível"}
                            className="max-w-full h-[80vh] rounded-lg shadow-2xl object-contain shadow-white/10"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Card;