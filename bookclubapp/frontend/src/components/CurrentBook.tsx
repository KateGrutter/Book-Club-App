import { useEffect, useState } from "react";
import { getBook } from "../services/BookService";
import { Link, useParams } from "react-router-dom";

export function CurrentBook() {

    const [book, setBook] = useState<any>('');

    useEffect(() => {
        getBook().then(data => setBook(data))
    }, []);


    return(
        <div>
            <p>{book?.title}</p>
        </div>
    )
}