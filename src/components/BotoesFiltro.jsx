import livros from "../Data";
const BotoesFiltro = ({ generoAtivo, setGeneroAtivo }) => {
    const generos = ["Todos", ...new Set(livros.map((livro) => livro.genero))];

    return (
        <div className="flex flex-wrap justify-center gap-3 py-2">
            {generos.map((genero) => (
                <button
                    key={genero}
                    onClick={() => setGeneroAtivo(genero)}
                    className={`
                        px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 shadow-sm
                        ${generoAtivo === genero
                            ? 'bg-blue-600 text-white shadow-blue-200 scale-105 transition-transform'
                            : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-100'
                        }
                    `}>
                    {genero}
                </button>
            ))}

        </div>
    );
};

export default BotoesFiltro;