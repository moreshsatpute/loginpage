import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'

const UseEffect123 = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch('https://api.github.com/search/users?q=type%3Auser');
        // const data = await response.json();
        setUsers(await response.json());

        // console.log(data);

    }


    useEffect(() => {
        getUsers();

    }, [])
    return (
        <>
            <div>
                <h2> list of Git-hub user</h2>
                <div className=' row '>
                    {
                        users.map((curElem) => {
                            <div>

                                <div className=" container-fluid mt-5 col-lg-3 col-md-3 row text-center p-4 m-2  mt-5 ">

                                    <Card border="danger" style={{ width: '18rem' }}>
                                        <Card.Img>{curElem.avatar_url}</Card.Img>
                                        <Card.Body>
                                            <Card.Title>Danger Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

                                </div>

                            </div>
                        })
                    }




                </div>

            </div>
        </>
    )
}

export default UseEffect123







