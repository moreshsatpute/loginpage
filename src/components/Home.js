import Button from 'react-bootstrap/Button';
import React from 'react'
import Form from 'react-bootstrap/Form'

const Home = () => {
    return (
        <>
            <div className='container mt-3'>
                <section  className='d-flex   justify-content-between' >
                    <div className='left_data mt-3 p-5 m-3' style={{width:"100%"}}>
                        <h3 className='text-center col-lg-6'>Sign Up</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="name" placeholder="Enter your name" />
                               
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                               
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="date" />
                               
                            </Form.Group>


                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                        </Form>
                           

                            <Button variant="warning" className='col-lg-3 ' type='submit' >submit</Button>{" "}
                            <Button variant="primary" className='col-lg-2 ' type='clear' >clear</Button>
                           

                    </div>
                    <div className='right_data mt-5  p-5'>
                            <div className='sign_img mr-5'>
                                <img src="/sign.png" style={{maxWidth:480}} alt="image is not available"/>

                            </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Home