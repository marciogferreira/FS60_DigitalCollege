function Header(props) {
    return (
        <header>
            {props.titulo}
            <br />
            {props.image}
            <hr />
            {props.children}
        </header>
    )
}

export default Header