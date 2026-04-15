
const SeletorMulti = ({ seletorAtivo, setSeletorAtivo }) => {

    return (
        <div>
            <button
                onClick={() => setSeletorAtivo((ativacao) => !ativacao)}
                className={`
                        px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 shadow-sm
                        ${seletorAtivo
                        ? 'bg-blue-600 text-white shadow-blue-200 scale-105 transition-transform'
                        : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-100'}`}>
                Multi-Seletor
            </button>
        </div>
    )
}

export default SeletorMulti;