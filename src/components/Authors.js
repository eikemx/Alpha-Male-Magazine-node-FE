import React, { useEffect, useState, Fragment    } from "react";
import { Text, Image, Box } from '@chakra-ui/react';
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
                    <Fragment
                        key={author.id}
                    >
                        <Container 
                            className='author' 
                            display='flex'
                            flexDirection='column'
                            mb='25px' 
                            p={2}
                            backgroundColor='#def1ff'
                            borderRadius='lg'
                        >
                                    <Box
                                        alignSelf='center'
                                    >
                                        <Image 
                                                borderRadius='lg'
                                                mb={5}
                                                src={`${serverURL}/images/${author.image}`} 
                                                alt={author.image} 
                                        />
                                    </Box>
                                    <Box
                                        alignSelf='center'
                                    >
                                        <Text 
                                            fontSize='xl'
                                        >{author.first_name} {author.last_name}
                                        </Text>
                                        <Link
                                        to={`/author/${author.id}`}
                                        >Read more...
                                        </Link>
                                    </Box>
                        </Container>
                    </Fragment>
                )
            }))}
        </>
    )
}

export default Authors;