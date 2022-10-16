import Product from "./Product";
import Data from "../Products.json";

const Products = () => {
    console.log(Data);
    return (
        <>
            <div className="d-flex flex-wrap justify-content-around mb-5 py-3">
                <div className="w-100 px-3">
                    <a className="text-decoration-none text-black" style={{ cursor: "pointer" }}>Showing Results for <strong>Laptops</strong> (Specifications)</a>
                </div>
                {
                    Data.data.map((data, index) => {
                        return (
                            <>
                                <Product
                                    key={index}
                                    title={data.title}
                                    brandName={data.brandName}
                                    rating={data.rating}
                                    orgPrice={data.orgPrice}
                                    discount={data.discount}
                                    disPrice={data.disPrice} />
                            </>
                        );
                    })
                }
                <div className="pagination bg-light pt-3 px-3 fs-5 mb-5">
                    <pre><strong>&lt; Previous</strong>               1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10              <strong>Next &gt;</strong></pre>
                </div>
            </div>



        </>
    )
}

export default Products;