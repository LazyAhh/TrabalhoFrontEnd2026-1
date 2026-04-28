const Favoritar = ({ setFavoritar, favoritar, favoritos, setFavoritos, id }) => {

    const onClickFavoritar = () => {
        if (favoritar) {
            if (favoritos.includes(id)) {
                setFavoritos(favoritos.filter((item) => [item === !id]));
            }
            setFavoritos([...favoritos, id])
            console.log(favoritos)
            return setFavoritar(false)
        }
        return setFavoritar(true)
    }

    return (
        <button
            onClick={onClickFavoritar}
            className="absolute top-3 left-2 border border-gray-300 p-2 text-yellow-500 bg-yellow-100">
            *
        </button>
    )
}

export default Favoritar