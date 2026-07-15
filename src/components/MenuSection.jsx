function MenuSection() {

    const menuItems = [
        {
            name: 'Lanzamientos',
            url: 'src/assets/menu/lanzamientos.webp'
        },
        {
            name: 'Promociones',
            url: 'src/assets/menu/promociones.webp'
        },
        {
            name: 'Desayunos',
            url: 'src/assets/menu/calentado.webp'
        },
        {
            name: 'Tardes Santafereñas',
            url: 'src/assets/menu/chocolate.webp'
        },
        {
            name: 'Para seguir el día',
            url: 'src/assets/menu/bruschetta.webp'
        },
        {
            name: 'Acompañamientos',
            url: 'src/assets/menu/bunuelo.webp'
        },
        {
            name: 'Antojos',
            url: 'src/assets/menu/corazoncitos.webp'
        },
        {
            name: 'Tortas y Ponqués',
            url: 'src/assets/menu/torta.webp'
        },
        {
            name: 'Panes para la mesa',
            url: 'src/assets/menu/pan.webp'
        },
        {
            name: 'Panes para ensamble',
            url: 'src/assets/menu/pan2.webp'
        },
        {
            name: 'Repostería',
            url: 'src/assets/menu/milhoja.webp'
        },
        {
            name: 'La alacena',
            url: 'src/assets/menu/granola.webp'
        },
    ]
    return (
        <section id="menu" className="flex flex-col items-center px-3 py-10">
            <div className="max-w-7xl">
                <h1 className="text-[clamp(2rem,4vw,2.5rem)] flex w-full pt-5 pb-10 md:pt-20 md:pb-10 uppercase text-(--orange-dark) font-cinzel tracking-tighter">Nuestro Menú</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-5">
                    {menuItems.map((item, index) => (
                        <div>
                            <div key={index} className="w-full cursor-pointer overflow-hidden">
                                <img className="w-fit h-fit object-cover rounded hover:scale-105 transition-transform duration-300" src={item.url} alt={item.name} />
                            </div>
                            <footer className="bg-(--brown) h-15 flex items-center justify-center rounded-b text-white font-semibold tracking-wider uppercase">
                                <span className="text-xs md:text-lg text-center">{item.name}</span>
                            </footer>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MenuSection