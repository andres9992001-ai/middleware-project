import 'bootstrap/dist/js/bootstrap.bundle.min.js';



export function renderBoard(Id: string){
    const nav = document.querySelector(Id);
    if(!nav){
        return ;
    }
    else{
        nav.innerHTML = `
            
            <nav
            class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark"
            aria-label="Main navigation"
            >
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Eco electricidad Llolleo</a>
                <button
                class="navbar-toggler p-0 border-0"
                type="button"
                id="navbarSideCollapse"
                aria-label="Toggle navigation"
                >
                <span class="navbar-toggler-icon"></span>
                </button>
                <div
                class="navbar-collapse offcanvas-collapse"
                id="navbarsExampleDefault"
                >
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                
                    </li>
                    <li class="nav-item">
                    </li>
                    <li class="nav-item"><a class="nav-link" href="#">Informacion de cuenta</a></li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Cerrar sesión</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        >Ajustes</a
                    >
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li>
                        <a class="dropdown-item" href="#">Something else here</a>
                        </li>
                    </ul>
                    </li>
                </ul> <!-- Busqueda de productos-->
                <form class="d-flex" role="search">
                    <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Buscar"
                    aria-label="Buscar"
                    />
                    <button class="btn btn-outline-success" type="submit">
                    Buscar
                    </button>
                </form>
                </div>
            </div>
            </nav>
            <div class="nav-scroller bg-body shadow-sm">
                <nav class="nav" aria-label="Secondary navigation">
                    <a class="nav-link active" aria-current="page" href="/src/pages/stock/stock.html">Stock disponible</a>
                    <!--
                    <a class="nav-link" href="#">
                    Friends
                    <span class="badge text-bg-light rounded-pill align-text-bottom"
                        >27</span
                    >
                    </a>
                    -->
                    <a class="nav-link" href="#">Ventas completadas</a>
                    <a class="nav-link active" href="/src/pages/order/orderList.html">Productos solicitados</a>

                </nav>
            </div>

        `;
        const links = nav.querySelectorAll<HTMLAnchorElement>('.nav-link');
        links.forEach( link => {
            if(link.getAttribute('href') === window.location.pathname){
                link.classList.add('active');
            }
        });
    }
}