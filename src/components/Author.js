import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Text, Image } from '@chakra-ui/react';
import { Container } from '@chakra-ui/layout';
import serverURL from "../serverURL";

const Author = () => {

    const [targetAuthor, setTargetAuthor] = useState({});
    const {authorID} = useParams();

useEffect(() => {
  // setIsLoading(true);
  const targetAuthor = async () => {
    const data = await fetch(`${serverURL}/api/alpha/authors/${authorID}`);
    const json = await data.json();
    console.log(data, json);
    setTargetAuthor(json.pop());
  } 
  targetAuthor();
}, [authorID]);

    
    // const targetAuthor = authors.find((author) => {
    //     return author.sys.id === authorID
    // });
    // // console.log(targetAuthor)

    // if (!targetAuthor) {
    //     return <Text>This Author has been removed!</Text>
    // }

    return (
        <Container 
            className="targeted-author" 
            key={targetAuthor.id}
            mt='25px'
            mb='25px'
            display='flex'
            flexDirection='column'
            alignItems='center'
        >
            <Text
                fontSize='2xl'
                fontWeight='bold'
                mb='10px'
            >{targetAuthor.first_name} {targetAuthor.last_name}</Text>
                <Image 
                                                src={`${serverURL}/images/${targetAuthor.image}`} 
                                                alt={targetAuthor.image} 
                                        />
            <Text
                mt='25px'
                mb='25px'
            >{targetAuthor.bio}</Text>
        </Container>
    )
}

export default Author;