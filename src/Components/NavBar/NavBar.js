import CartWidget from "./CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <button type="button" class="btn btn-primary">Alimento</button>
                <button type="button" class="btn btn-secondary">Peluqueria</button>
                <button type="button" class="btn btn-success">Accesorios</button>
                <button type="button" class="btn btn-info">Novedades</button>
            </div>
            <CartWidget />
        </nav>
    )

}

export default NavBar