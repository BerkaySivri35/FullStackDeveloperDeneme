const root = document.getElementById("root");

class PhoneApp extends React.Component {
    constructor(props) {
        super(props);
        this.changeBlue = this.changeBlue.bind(this);
        this.changeWhite = this.changeWhite.bind(this);
        this.changeOrange = this.changeOrange.bind(this);
        this.changeBlack = this.changeBlack.bind(this);
        this.state = {
            brand: "Samsung",
            model: "A53",
            hafıza: "128GB",
            ram: "8GB RAM",
            resimSrc: ["https://productimages.hepsiburada.net/s/194/1100/110000161749625.jpg/format:webp",
            "https://productimages.hepsiburada.net/s/193/1100/110000160064097.jpg/format:webp",
            "https://productimages.hepsiburada.net/s/194/1100/110000161705148.jpg/format:webp"],

        }
        console.log(this.state.resimSrc)
    }
    changeBlue() {
        this.setState({
            resimSrc: ["https://productimages.hepsiburada.net/s/193/1100/110000160472866.jpg/format:webp",
                "https://productimages.hepsiburada.net/s/193/1100/110000160063098.jpg/format:webp", "https://productimages.hepsiburada.net/s/193/1100/110000160644421.jpg/format:webp"
            ],
        })
    }

    changeWhite() {
        this.setState({
            resimSrc: ["https://productimages.hepsiburada.net/s/194/1100/110000161749627.jpg/format:webp", "https://productimages.hepsiburada.net/s/194/1100/110000161816872.jpg/format:webp",
                "https://productimages.hepsiburada.net/s/193/1100/110000160644424.jpg/format:webp"],
        })
    }
    changeOrange() {
        this.setState({
            resimSrc: ["https://productimages.hepsiburada.net/s/194/1100/110000161816871.jpg/format:webp",
                "https://productimages.hepsiburada.net/s/194/1100/110000162346200.jpg/format:webp",
                "https://productimages.hepsiburada.net/s/193/1100/110000160644423.jpg/format:webp"],
        })
        console.log("Turuncu seçildi")
    }

    changeBlack() {
        this.setState({
            resimSrc: ["https://productimages.hepsiburada.net/s/194/1100/110000161749625.jpg/format:webp",
                "https://productimages.hepsiburada.net/s/193/1100/110000160064097.jpg/format:webp",
                "https://productimages.hepsiburada.net/s/194/1100/110000161705148.jpg/format:webp"],
        })
        console.log("Siyah seçildi")
    }

    render() {
        return (
            <div className="container pt-5">

                <div className="row p-3 border border-3 rounded-3 shadow-lg p-3 mb-5 bg-body rounded">
                    <div className="col-6 ">
                        <h1 className="">Marka: {this.state.brand}</h1>
                        <h3 className="">Model: {this.state.model}</h3>
                        <p className="">Hafıza: <b>{this.state.hafıza}</b></p>
                        <p className="">Ram: <b>{this.state.ram}</b></p>

                        <button className="btn btn-primary me-2" onClick={this.changeBlue}>Mavi
                        </button>

                        <button className="btn btn-light me-2" onClick={this.changeWhite}>Beyaz
                        </button>

                        <button className="btn btn-warning me-2" onClick={this.changeOrange}>Turuncu
                        </button>

                        <button className="btn btn-dark" onClick={this.changeBlack}>Siyah
                        </button>

                        
                    </div>
                    <div className="col-6 d-flex justify-content-center">


                            {/* <li>
                                {
                                this.state.resimSrc.map((item,index)=>
                                    <img src={item} key={index} alt="" width={50} />
                                )
                            }
                            </li> */}

                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={this.state.resimSrc[0]} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={this.state.resimSrc[1]} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={this.state.resimSrc[2]} className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon bg-danger" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon bg-danger" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>

                        </div>


                </div>



            </div>


        );
    }
}



ReactDOM.render(<PhoneApp />, root);
