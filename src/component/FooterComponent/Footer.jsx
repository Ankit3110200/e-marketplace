import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="footer d-flex flex-column py-2" style={{ backgroundColor: "#101D2C" }}>
                <div className="d-flex flex-row text-white">
                    <div className="column-1 p-5" style={{ width: "40%" }}>
                        <h6 className="text-uppercase fs">About E-MarketPlace</h6>
                        <p style={{ fontWeight: "lighter" }}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione minus, aut omnis totam et rem reiciendis odit, labore, nobis exercitationem illum enim voluptates.
                        </p>
                    </div>
                    <div className="column-2 p-5" style={{ width: "30%" }}>
                        <ul>
                            <li className="mb-3">Terms & Condition</li>
                            <li className="mb-3">Delivery & Shipping</li>
                            <li className="mb-3">Cancellation, Refund & Exchange Policy</li>
                            <li className="mb-3">Privacy Polices</li>
                            <li className="mb-3">FAQ</li>
                        </ul>
                    </div>
                    <div className="column-3 p-5" style={{ width: "30%" }}>
                        <p className="mb-4">
                            Phone: <br />
                            (+91)-9724-666-420
                        </p>
                        <p className="mb-4">
                            Email:<br />
                            zilenmodi@gmail.com
                        </p>
                        <input type="email" name="email" id="email" className='me-2' placeholder='Enter your E-mail' />
                        <button type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="text-center text-white w-100 text-italian">
                    &copy; E- MarketPlace All Right Reserved
                </div>
            </div>
        </>

    );
}

export default Footer;