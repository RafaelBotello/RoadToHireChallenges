import React from "react";
import Navbar from "../../Components/Navbar";
import "../../Components/Products/style.css";
import Products from "../../Components/Products/";
import products from "../../products/products.json";
import Filters from "../../Components/Filters";
import Footer from "../../Components/Footer/";

class ProductsPage extends React.Component {
  state = {
    products,
    filters: []
  };

  maincont = {
    marginTop: "84px",
    height: "80vh",
    display: "block"
  };

  onHandleFilter = e => {
    const filter = e.target.value;

    let filters = [filter];
    if (filter === "all") {
      filters = [];
    }

    this.setState({
      filters
    });
  };

  render() {
    const { filters } = this.state;

    return (
      <>
        <div className="container-fluid" style={this.maincont}>
          <Navbar
            classli1={"nav-item"}
            classli2={"nav-item active"}
            classli3={"nav-item"}
          />
          <div className="row main-cont">
            <Filters handleFilter={this.onHandleFilter} />
            <div id="products" className="col-md-9 cont-prod bg-light row">
              {this.state.products.map((product, index) => {
                // Loop through each product
                // And render them all
                if (filters.length > 0 && !filters.includes(product.category)) {
                  return;
                }

                return (
                  <Products
                    key={index}
                    dataprice1={product.dataprice1}
                    class1={product.class1}
                    dataprice2={product.dataprice2}
                    class2={product.class2}
                    name={product.name}
                    description={product.description}
                    colors={product.colors}
                    price={product.price}
                    category={product.category}
                  />
                );
              })}
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default ProductsPage;
