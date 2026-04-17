import CardGenero from "./CardGenero"

const CardImagem = ({ setImagemAberta, imagem, alt }) => {
    return (
        <img
            src={imagem || 'https://placehold.co/600x400?text=Imagem+não+encontrada'}
            alt={alt}
            className="w-full h-full object-cover cursor-zoom-in hover:scale-105 transition-transform duration-500"
            onClick={() => setImagemAberta(true)}
        />
    )
}

export default CardImagem