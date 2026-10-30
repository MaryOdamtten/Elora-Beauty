import { Link } from "react-router-dom"
import products from "../../data/products"

const FeaturedProducts = ({searchTerm}) => {
    const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
)
   
    return (
        <section className="bg-white md:mt-15 mt-8 px-7">
            <h1 className="text-2xl font-bold md:text-4xl text-center">Featured Products</h1>
            <p className="text-gray-500 md:text-lg text-center mt-2">Find your everyday favourites at Elora</p>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-6 mt-5">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                    <div key={product.id} className="overflow-hidden rounded-lg border border-gray-300 shadow-md leading-7 text-left">
                        <img src={product.image} alt="image" className="w-full aspect-square object-cover " />
                        <h1 className="text-lg pl-3 mt-3">{product.name}</h1>
                        <p className=" text-gray-500 font-semibold text-md pl-3">₦{product.price}</p>

                        <div className="px-3 mt-2">
                            <Link to={`/product/${product.id}`} className=" block text-center bg-[#C4A484] text-white text-sm md:text-lg font-semibold md:px-3 px-2 py-2  mb-4 rounded-md w-full">View Product</Link>
                        </div>
                    </div>

                ))
            ) : (
                <p className="col-span-full text-center py-8">No products found.</p>
            )}
            </div>


        </section>
    )
}

export default FeaturedProducts
