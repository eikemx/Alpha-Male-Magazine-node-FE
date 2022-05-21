import { useEffect, useState } from "react";
import client from "../contentful/client";

import Author from "./Author";

const AuthorWrapper = () => {

    const [authors, setAuthors] = useState()

useEffect(() => {
    client
    .getEntries({
        content_type: "author"
    })
    .then((data) => {
        setAuthors(data);
    })
}, []);

    console.log(authors)

    return (
        <>
        <Author authors={authors.items} />
        </>
    )
}

export default AuthorWrapper;