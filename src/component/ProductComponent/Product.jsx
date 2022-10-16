import './Product.css';

const Product = (props) => {
    return (
        <>
            <div className="card m-3 bg-white border-5" style={{ width: "19rem", border: "none" }}>
                {/* <img className="card-img-top p-3 bg-light" src="https://p.kindpng.com/picc/s/297-2977923_high-resolution-laptop-hd-hd-png-download.png" alt="Product" /> */}
                <img className="card-img-top p-3 bg-light" src="https://www.kindpng.com/picc/m/45-450792_laptop-png-gaming-laptop-png-lenovo-transparent-png.png" alt="Product" />
                <div className="card-body bg-light">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text"><strong>Brand : </strong>{props.brandName}</p>
                    <div className="mb-4 p-0">
                        <span className="rating px-2 py-1" style={{ backgroundColor: "#C69963" }}>{props.rating}&nbsp;
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                        </span>
                    </div>
                    <div>
                        <p className="org-price"><strike>&#8377; {props.orgPrice}</strike></p>
                        <p className="discount">{props.discount}% off</p>
                    </div>
                    <h4>&#8377; {props.disPrice}</h4>
                </div>
            </div>
        </>
    );
}

export default Product;