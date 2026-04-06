import livros from "../Data";
const BotoesFiltro = ({ generoAtivo, setGeneroAtivo }) => {
const generos = ["Todos", ...new Set(livros.map((livro) => livro.genero))];

    return (
        <div className="">
            {generos.map((genero) => (
                <button
                    key={genero}
                    onClick={() => setGeneroAtivo(genero)}
                    className={'${genero === generoAtivo ? "classeAtivo" : "classeInativo"'}>
                    {genero}
                </button>
            ))}

        </div>
    );
};

export default BotoesFiltro;