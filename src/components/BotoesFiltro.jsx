import livros from "../Data";
const BotoesFiltro = ({ generoAtivo, setGeneroAtivo, seletorAtivo, setSeletorAtivo }) => {
    const generos = ["Todos", ...new Set(livros.flatMap((livro) => livro.genero))];

    const selecao = (generoBotao) => {
        if (generoBotao === "Todos") {
            setGeneroAtivo(["Todos"]);
            setSeletorAtivo(false);
            return;
        }

        if (!seletorAtivo) {
            setGeneroAtivo([generoBotao]);
            return;
        }

        setGeneroAtivo((generosAtivos) => {
            const semTodos = generosAtivos.filter((genero) => genero !== "Todos");

            if (semTodos.includes(generoBotao)) {
                const generosNovos = semTodos.filter((generosMarcados) => generosMarcados !== generoBotao);
                if (generosNovos.length === 0) {
                    setSeletorAtivo(false)
                    return ["Todos"]
                }
                return generosNovos;
            }

            return [...semTodos, generoBotao]
        })
    }


    return (
        <div className="flex flex-wrap justify-center gap-3 py-2">
            {generos.map((genero) => (
                <button
                    key={genero}
                    onClick={() => selecao(genero)}
                    className={`
                        px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 shadow-sm
                        ${generoAtivo.includes(genero)
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