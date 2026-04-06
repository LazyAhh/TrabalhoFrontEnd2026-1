import livros from "../Data";
const BotoesFiltro = ({ generoAtivo, setGeneroAtivo }) => {
const generos = ["Todos", ...new Set(livros.map((livro) => livro.genero))];

    return (
        <div className="">
            {generos.map((genero) => (
                <button
                    key={genero}
                    onClick={() => setGeneroAtivo(genero)}
                    data-ativo={generoAtivo === genero}
                    className="">
                    {genero}
                </button>
            ))}

        </div>
    );
};

export default BotoesFiltro;