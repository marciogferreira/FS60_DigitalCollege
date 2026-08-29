import Produto from "../components/Produto"

function Main() {
    // https://dontpad.com/fs60/main
    return (
        <main>
            <hr />
            <div className="row">
                <div className="col-md-3">
                    <Produto 
                        titulo="Sapato Casual" 
                        image="https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/difranca/media/uploads/produtos/foto/zlrxlole/sapato-casual-masculino-tenis-couro-difranca-5505-preto-3.jpg" 
                        preco="79,99">
                        <p>
                            Texto descritivo
                        </p>
                    </Produto>
                </div>
                 <div className="col-md-3">
                    <Produto 
                        titulo="Sapato Social" 
                        image="https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/difranca/media/uploads/produtos/foto/zlrxlole/sapato-casual-masculino-tenis-couro-difranca-5505-preto-3.jpg" 
                        preco="79,99">
                        <p>
                            Texto descritivo
                        </p>
                    </Produto>
                </div>
                <div className="col-md-3">
                     <Produto 
                        titulo="Sapato Social" 
                        image="https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/difranca/media/uploads/produtos/foto/zlrxlole/sapato-casual-masculino-tenis-couro-difranca-5505-preto-3.jpg" 
                        preco="79,99">
                        <p>
                            Texto descritivo
                        </p>
                    </Produto>
                </div>
                <div className="col-md-3">
                     <Produto 
                        titulo="Sapato Social" 
                        image="https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/difranca/media/uploads/produtos/foto/zlrxlole/sapato-casual-masculino-tenis-couro-difranca-5505-preto-3.jpg" 
                        preco="79,99">
                        <p>
                            Texto descritivo
                        </p>
                    </Produto>
                </div>
            </div>
            
            <hr />
        </main>
    )
}

export default Main