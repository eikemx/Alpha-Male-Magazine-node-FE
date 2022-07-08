import { Fragment } from "react";
import { Link } from 'react-router-dom';
import { Text, Image, Box } from '@chakra-ui/react';
import { Container } from "@chakra-ui/layout";
import serverURL from "../serverURL";

const AllArticles = ({articles}) => {
// console.log(articles)

    return (
        <>
            {articles.map((article) => {
                return (
                    <Fragment
                        key={article.id}
                    >
                        <Container 
                            className="article" 
                            display='flex'
                            flexDirection='column'
                            mb='25px' 
                            p={2}
                            backgroundColor='#def1ff'
                            borderRadius='lg'
                        >
                                <Box 
                                    alignSelf='center'
                                    width="50%" 
                                    height="50%" 
                                >
                                    <Image 
                                                borderRadius='lg'
                                                mb={5}
                                                src={`${serverURL}/images/${article.image}`} 
                                                alt={article.title} 
                                            />
                                </Box>
                                <Box
                                >
                                    <Text 
                                        fontSize='xl'
                                        fontWeight='bold'
                                    >{article.title}</Text>
                                    <Text 
                                        fontSize='md' 
                                        mb={2}
                                    >{article.summary}
                                    </Text>
                                    <Link 
                                        to={`/article/${article.id}`}
                                    >Read more...</Link>
                                </Box>
                        </Container>
                    </Fragment>
                )
            })}
        </>
    )

}

export default AllArticles;