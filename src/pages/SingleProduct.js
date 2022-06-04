import { Link, useParams } from 'react-router-dom';
import products from '../data';

const SingleProduct = () => {
  const { productID } = useParams();
  let { image, name } = products.find((productID) => productID === productID);
  return (
    <section className="section product">
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to="/products">Back to products</Link>
    </section>
  );
};

export default SingleProduct;
