
const SeletorRestrito = ({ setSeletorRestrito, seletorRestrito }) => {
    return (
        <div className="">
            <button
                onClick={() => setSeletorRestrito((estadoAnterior) => !estadoAnterior)}
                className={`
                        px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 shadow-sm
                        ${seletorRestrito
                        ? 'bg-blue-600 text-white shadow-blue-200 scale-105 transition-transform'
                        : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-100'}`}>
                Restrito
            </button>
        </div>
    )
}

export default SeletorRestrito;