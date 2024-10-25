
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BookDetails = () => {

    const [bookDetails, setBookDetails] = useState({});
    const { id } = useParams();
    async function getBookDetails() {
        try {
            const getBookDetailsWithId = await axios.get(`http://localhost:8080/book/getBookById/${id}`);
            setBookDetails(getBookDetailsWithId.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getBookDetails();
    }, [])
    return (
        <div>
            <div>
                <figure>
                    <img
                        src={bookDetails.image}
                        alt="Album" className='h-full w-full' />
                </figure>
                <div>
                    <h2 className="card-title">Title: {bookDetails.title}</h2>
                    <h2 className="card-title">Author: {bookDetails.author}</h2>
                    <p><strong>Description</strong>: {bookDetails.description}</p>
                    <p><strong>Price</strong>: {bookDetails.price}</p>
                    <div>
                        <button>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default BookDetails