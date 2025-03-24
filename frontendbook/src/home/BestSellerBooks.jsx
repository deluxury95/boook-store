

import React, { useEffect, useState } from 'react';
import BookCards from "../components/BookCards";

const BestSellerBooks = () => {
    const [books, setBooks] = useState([]);

    const backendUrl = import.meta.env.VITE_BACKEND_URL


    // useEffect(() => {
    //     fetch(`${backendUrl}/all-books`)
    //         .then(res => {
    //             if (!res.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             const contentType = res.headers.get('content-type');
    //             if (!contentType || !contentType.includes('application/json')) {
    //                 throw new TypeError("Expected JSON, but got " + contentType);
    //             }
    //             return res.json();
    //         })
    //         .then(data => setBooks(data.slice(0, 8)))
    //         .catch(error => console.error('There was a problem with the fetch operation:', error));
    // }, []);

    useEffect(() => {
        fetch(`${backendUrl}/all-books`)
            .then(res => res.json())
            .then(data => {
                // Shuffle the data randomly
                const shuffledData = data.sort(() => 0.5 - Math.random());
                // Take the first 8 items
                setBooks(shuffledData.slice(0, 8));
            })
            .catch(error => console.error("Error fetching books:", error));
    }, []);

    return (
        <div>
            <BookCards books={books} headline="Best Seller Books" />
        </div>
    );
};

export default BestSellerBooks;
