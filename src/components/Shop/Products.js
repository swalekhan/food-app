import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'White Apple',
    description: "As we are always intrigued by customers' needs and passions, and through our journey to deliver excellence and uniqueness",
  },
  {
    id: 'p2',
    price: 5,
    title: 'Banana',
    description: "As we are always intrigued by customers' needs and passions, and through our journey to deliver excellence and uniqueness",
  },
  {
    id: 'p3',
    price: 6,
    title: 'Orange',
    description: "As we are always intrigued by customers' needs and passions, and through our journey to deliver excellence and uniqueness",
  },
  {
    id: 'p4',
    price: 10,
    title: 'Pineapple',
    description: "As we are always intrigued by customers' needs and passions, and through our journey to deliver excellence and uniqueness",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
