import React from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import './ProductsList.scss';

class ProductsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            presentPage: 0,
            currentProducts: [0, 6]
        };
        this.elements = this.props.sortBy.products.length;
        this.productPage = 6;
        this.pagesCount = Math.ceil(this.elements / this.productPage);
    }

    handleClick(e, index) {
        e.preventDefault();
        this.setState({
            presentPage: index,
            currentProducts: [index * this.productPage, (index + 1) * this.productPage]
        });
    }

    render() {
        const { presentPage } = this.state;

        return (
            <div className="home-products-list col-sm-12 col-md-8 col-lg-12">
                <div className="products-list">
                    {(this.props.sortBy.products.slice(this.state.currentProducts[0], this.state.currentProducts[1])).map((product, i) => {
                        return (
                            <SingleProduct
                                key={i}
                                index={i}
                                title={product.title}
                                price={product.price}
                                content={product.content}
                                info={product.info}
                                img={product.img}
                            />
                        )
                    })}
                </div>
                <div className="products-list-pagination">
                    <Pagination aria-label="Page navigation" >    
                        {[...Array(this.pagesCount)].map((page, i) =>
                            <PaginationItem active={i === presentPage} key={i}>
                                <PaginationLink onClick={e => this.handleClick(e, i)} href="#">
                                    {i + 1} 
                                </PaginationLink>
                            </PaginationItem>
                        )} 
                    </Pagination>
                </div>
            </div>
        );
    };
}

export default ProductsList;