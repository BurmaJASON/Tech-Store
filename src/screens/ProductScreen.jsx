import { useParams,useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import { useGetProductDetailQuery } from '../slices/productsApiSlice'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { useState } from 'react'
import { addToCart } from '../slices/cartSlice'
import { useDispatch } from 'react-redux'

const ProductScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { id : productId } = useParams();

    const [qty, setQty] = useState(1);


    const { data : product, isLoading, error } = useGetProductDetailQuery(productId);

    const addToCartHandler = () => {
        dispatch(addToCart({...product, qty}));
        navigate('/cart');
    }
   

  return (
    <>
        <Link className='btn btn-light my-3' to='/'>Go Back</Link>

        { isLoading ? (
            <Loader />
        ) : error ? (
            <Message variant='danger'>{error?.data?.message || error.error}</Message>
        ) : (
            <Row>
                <Col md={5}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={4} >
                    <ListGroup variant='flush' >
                        <ListGroup.Item className='bg-primary text-white'>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item className='bg-primary text-white'>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item className='bg-primary'> <span className='text-white me-2'>Description:</span> {product.description}</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item className='bg-secondary text-black '>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>
                                            ${product.price}
                                        </strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item className='bg-secondary text-black '>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        <strong>
                                            {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock' }
                                        </strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            {product.countInStock > 0 && (
                                <ListGroup.Item className='bg-secondary text-black '>
                                    <Row>
                                        <Col>Qty</Col>
                                        <Col>
                                            <Form.Control 
                                                as='select'
                                                value={qty}
                                                onChange={e => setQty(Number(e.target.value))}>
                                                    { [...Array(product.countInStock).keys()].map(x => (
                                                        <option value={x +1} key={x + 1}>{x + 1}</option>
                                                    )) }
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )}

                            <ListGroup.Item className='bg-secondary '>
                            <Button className='btn-block' type='button' disabled={product.countInStock === 0} onClick={addToCartHandler}>
                                    Add To Cart
                            </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        )}
    </>
  )
}

export default ProductScreen