function Produto(props) {
    return (
        <>  
            {/* https://dontpad.com/fs60 */}
            <div className="card" style={{ backgroundColor: '#F7F7F7' }}>
                <img src={props.image} className="card-img-top" alt={props.titulo} />
                <div className="card-body">
                    <h5 className="card-title">{props.titulo}</h5>
                    <p className="card-text">
                        {props.children}
                    </p>
                    <p style={{ fontSize: '2em', float: 'right' }}>R$ {props.preco}</p>
                    <a href="#" className="btn btn-success">Adicionar no Carrinho</a>
                </div>
            </div>
        </>
    )
}

export default Produto