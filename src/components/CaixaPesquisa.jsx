const CaixaPesquisa= ({busca, setBusca}) =>{
    return(
        <div className="relative w-full max-w-2xl mx-auto group">
        
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="text-gray-400 group-focus-within:text-blue-500 transition-colors">
                    🔍
                </span>
            </div>

            <input
                placeholder="Pesquise por título..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="block w-full pl-11 pr-12 py-3.5 bg-white border border-gray-200 rounded-2xl shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200" />

                 {busca && (
                    <button
                        onClick={() => setBusca("")}
                        className="absolute inset-y-0 right-0 pr-4 flex item-center
                         text-gray-400 hover:text-red-500 transition-colors"
                        title="Limpar busca">
                            <span className="text-lg font-bold flex items-center justify-center">X</span>
                        </button>
                 )}
        </div>
    )
}

export default CaixaPesquisa;