const CardGenero = ({genero}) =>{
    return(
    <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full uppercase">
        {(genero).join(" / ") || "Nenhum gênero disponível"}
    </span>
    )
}

export default CardGenero