
const ImagemAberta = ({ setImagemAberta, imagem, alt }) => {

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300"
            onClick={() => setImagemAberta(false)} >
            <div className="relative max-w-4xl max-h-full">
                <button
                    className="absolute -top-10 right-0 text-white text-lg font-bold hover:text-red-400"
                    onClick={() => setImagemAberta(false)}
                >
                    Fechar [X]
                </button>

                <img
                    src={imagem || 'https://placehold.co/600x400?text=Imagem+não+encontrada'}
                    alt={alt || "Nenhum nome disponível"}
                    className="max-w-full h-[80vh] rounded-lg shadow-2xl object-contain shadow-white/10"
                />
            </div>
        </div>
    )
}

export default ImagemAberta;