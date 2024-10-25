import { Disclosure } from '@headlessui/react';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { Link, NavLink, useNavigate } from 'react-router-dom';


const BookList = () => {
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);

    const getBooks = async () => {
        try {
            const response = await axios.get('http://localhost:8080/book/getBooks');
            if (response.status === 200) {
                setBooks(response.data);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const deleteBook = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8080/book/deleteBook/${id}`);
            if (response.status === 200) {
                toast.success(response.data);
                getBooks();
            }
        } catch (error) {
            toast.error("something went wrong");
        }
    }
    useEffect(() => {
        getBooks();
    }, []);

    return (
        <div >
            <Disclosure as="nav" className="">
                <div>
                    <div>
                    </div>
                </div>
            </Disclosure>

            <header style={{display:"flex",backgroundColor:"#E9EFEC"}}>
                <div>
                    <h1 style={{paddingLeft:"80px"}}>Book Store</h1>
                </div>
                <div style={{marginTop:"30px",marginLeft:"30%"}}>
                    <button className='btn' onClick={() => navigate('/book-form')}>Add Book</button>
                </div>
            </header>
            
            <main>
                <div>
                    {books.length > 0 ? books.map((el, index) => (
                        <div key={el._id}>
                            <NavLink to={`/book-details/${el._id}`}>
                                <figure>
                                    <img
                                        src={el.image}
                                        alt="Not Found" className='h-full w-full' />
                                </figure>
                            </NavLink>
                            <div className="card-body">
                                <h2 className="card-title">Book Title: {el.title}</h2>
                                <p><strong>Author</strong>: {el.author}</p>
                                <p>{el.description}</p>
                                <h3 className='card-title m-auto'>Price: &#8377; {el.price}</h3>
                                <div className="card-actions">
                                    <Link to={`/book-form/${el._id}`}><button>Edit</button></Link>
                                    <button onClick={() => deleteBook(el._id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    )) : <h2 style={{textAlign:"center"}}>No Any Book Available</h2>}
                </div>
            </main >
        </div >
    )
}


export default BookList