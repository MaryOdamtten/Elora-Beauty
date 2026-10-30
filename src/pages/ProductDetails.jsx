import { useParams } from "react-router-dom"
import products from "../data/products"

const ProductDetails = () => {
    const { id } = useParams()
    const product = products.find((item) => item.id === Number(id))
    if (!product) {
        return <h1>Product not found</h1>
    }
    const phoneNumber = "2348139363971"
    const message = `Hello, I would like to order ${product.name} for ₦${product.price}.`
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    return (
     
        <div className=" flex flex-col md:flex-row justify-center items-center gap-6 px-3 py-5 bg-white">
            <div className="w-full md:w-1/2">
                <img src={product.image} alt="image" className="w-full h-130 object-contain rounded-md"/>
            </div>
            <div className="leading-7 w-full md-w-1/2">
            <h1 className="font-semibold text-2xl md:text-4xl">{product.name}</h1>
            <p className="text-lg md:font-medium text-pink-300">Price: ₦{product.price}</p>
            <p className="text-gray-500">{product.description}</p>
            <p className="">{product.shades}</p>
           
             < a href={whatsappLink} target="_blank" rel="noreferrer"className="bg-[#C4A484] inline-block text-center text-white px-4 py-2 mt-4 font-medium w-full">Order on WhatsApp</a>
            </div>

        </div>
        
    )
}

export default ProductDetails