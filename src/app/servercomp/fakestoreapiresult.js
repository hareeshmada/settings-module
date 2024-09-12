export default async function getProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        return (
            <div>
                {products?.map((item,ind)=>{
                    return <div key={`it_${ind}`}>{item.title}</div>
                })}
            </div>
        )
    } catch (error) {
        // Handle fetch or JSON parsing errors
        console.error('Error fetching products:', error);
        return null;
    }
}