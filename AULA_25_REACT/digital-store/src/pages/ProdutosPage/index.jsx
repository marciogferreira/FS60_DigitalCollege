import Footer from "../../layouts/Footer"
import Header from "../../layouts/Header"
import Main from "../../layouts/Main"

function ProdutosPage() {
    return (
        <>
            <Header 
                titulo="DigitalStore"
                image="Image da Logomarca"
            />

            <Header 
                titulo="CollegeStore"
                image="Image da Logo"
            />

            <Header titulo="Teste">
                <h1>Site para Loja Virtual</h1>
                Links de Redes Sociais
                Facebook - Instagram - X
            </Header>

            <Main />
            <Footer />
        </>
    )
}

export default ProdutosPage