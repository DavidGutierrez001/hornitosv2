export default function Lanzamientos() {

    const images = import.meta.glob('../../assets/menu/lanzamientos/*.{png,jpg,jpeg,svg}', {
        eager: true,
        import: 'default',
    });

    const infoProducts = [
        { file: "001", name: "Wafflebono buen día" },
        { file: "002", name: "Tartaleta de limón" },
        { file: "003", name: "Tartaleta de chocolate" },
        { file: "004", name: "Desayuno campesino" },
        { file: "005", name: "Montadito usaquén" },
        { file: "006", name: "Hojaldre de chocolate" },
        { file: "007", name: "Pannecook de la huerta" },
        { file: "008", name: "Choripan" },
        { file: "009", name: "Wrap jamón y queso" },
    ];


    const products = infoProducts.map((item, index) => {
        const path = Object.keys(images).find((p) => p.includes(`${item.file}.`));

        return {
            id: index + 1,
            name: item.name,
            imagen: images[path],
        };
    });

    return (
        <div className="flex flex-col w-full">
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {products.map((product) => (
                    <div key={product.id} className="flex flex-col rounded-lg shadow bg-white">
                        <img src={product.imagen}
                            alt={product.name}
                            className="w-full h-auto rounded"
                        />
                        <footer className="min-h-35 flex flex-col justify-between p-3">
                            <h3 className="text-(--brown) font-extrabold text-lg leading-none">
                                {product.name}
                            </h3>
                            <p className="text-black/90 text-sm mt-2">
                                Descripción del producto...
                            </p>
                            <button className="h-11 text-sm tracking-wide mt-5 bg-(--brown) text-white rounded cursor-not-allowed">
                                Agregar al carrito
                            </button>
                        </footer>
                    </div>
                ))}
            </div>
        </div>
    );
}