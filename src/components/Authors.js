import React, { useEffect, useState } from "react";
import { Text, Image } from '@chakra-ui/react';
import { Container } from '@chakra-ui/layout';
import { Link } from 'react-router-dom';
import serverURL from "../serverURL";

const Authors = () => {

    const [authors, setAuthors] = useState([]);

useEffect(() => {
  // setIsLoading(true);
  const fetchAuthors = async () => {
    const data = await fetch(`${serverURL}/api/alpha/authors`);
    const json = await data.json();
    // console.log(data, json);
    setAuthors(json);
  } 
  fetchAuthors();
}, []);
    // console.log(authors);

    return (
        <>
            {authors.map((author => {
                return (
                    <>
                        <Container 
                            className='author' 
                            key={author.id}
                        >
                                <Text fontSize='xl'>{author.first_name} {author.last_name}</Text>
                                <Image 
                                                src={`${serverURL}/images/${author.image}`} 
                                                alt={author.image} 
                                        />
                                <Link
                                    to={`/author/${author.id}`}
                                    >Read more...</Link>
                        </Container>
                    </>
                )
            }))}
        </>
    )
}

export default Authors;