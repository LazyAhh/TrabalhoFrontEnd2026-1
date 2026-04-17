
const CardInformacoes = ({ nome, autor, paginas, descricao }) => {
    return (
        <>
            <h2 className="text-xl font-bold text-gray-800 leading-tight">{nome || "Nenhum nome disponível"}</h2>
            <p className="text-sm text-gray-800 italic mb-2">por {autor || "nennhum autor disponível"}</p>

            <div className="text-xs text-blue-500 font-semibold mb-3">
                {paginas || "Sem número de "} páginas
            </div>

            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                <p className="text-gray-600 text-sm pr-2 overflow-y-auto custom-scrollbar leading-relaxed">
                    {descricao || "Nenhuma descrição disponível"}
                </p>
            </div>
        </>
    )
}

export default CardInformacoes