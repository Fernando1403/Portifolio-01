function CardProjeto({nome, imagem}) {
    return (
        <>
            <div
                className="fundo img-port w-[360px] h-[460px] bg-cover rounded-[10px] transition-[background-position_0.8s] relative hover:bg-[100%_100%]"
                style={{ backgroundImage:`url(${imagem})`, backgroundPosition: '100% 0%' }}
            >
                <div className="overlay">{nome}</div>
            </div>
        </>
    );
}

export default CardProjeto;