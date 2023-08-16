import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import { useGetProductDetailQuery } from '../slices/productsApiSlice'
import Loader from '../components/Loader'
import Message from '../components/Message'

const ProductScreen = () => {
    const { id : productId } = useParams();

    const { data : product, isLoading, error } = useGetProductDetailQuery(productId);
   

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
                            <ListGroup.Item className='bg-secondary '>
                            <Button className='btn-block' type='button' disabled={product.countInStock === 0}>
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