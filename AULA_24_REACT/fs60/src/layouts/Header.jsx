function Header() {

    const styles = {
        logo: {
            color: 'red',
            fontWeight: 'bold'
        },
        menu: {
            color: 'blue'
        }
    }

    return (
        <>
            <header style={{ backgroundColor: 'yellow', padding: '10px' }}>
                <div id="logo" style={styles.logo}>
                    LogoMarca
                </div>
                <div id="menu" style={styles.menu}>
                    <nav>
                        <ul>
                            <li>
                                <a href="" className="bg-red-500">Home</a>
                            </li>
                            <li>
                                <a href="">Quem Somos</a>
                            </li>
                            <li>
                                <a href="">Produtos</a>
                            </li>
                            <li>
                                <a href="">Contato</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header