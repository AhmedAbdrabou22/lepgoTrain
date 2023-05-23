import React from 'react'
import { Row, Card, Button } from 'react-bootstrap'
import data from './data'
const Foods = () => {
    return (
        <div>
            {
                data.length >= 1 ? (
                    data.map((itemCard) => {
                        return (
                            <Row className='mt-1 p-2' key={itemCard.id}>
                                <Card className='d-flex flex-row'>
                                    <Card.Img variant="top" src={itemCard.imgUrl} className='w-25' />
                                    <Card.Body>
                                        <div className='d-flex justify-content-between'>
                                            <p>{itemCard.title}</p>
                                            <p>{itemCard.price+' LE'}</p>
                                        </div>
                                        <Card.Text>
                                            <p>{itemCard.discription}</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Row>
                        )
                    })
                ) : (<h1>No Data Here</h1>)
            }
        </div>
    )
}

export default Foods
