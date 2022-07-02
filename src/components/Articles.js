import { Fragment } from "react";
import { Link } from 'react-router-dom';
import { Text, Image, Box } from '@chakra-ui/react';
import { Container } from "@chakra-ui/layout";
import serverURL from "../serverURL";

const Articles = ({articles}) => {
console.log(articles)

let index = 3

const displayedArticles = articles.slice(0,index)
// console.log(displayedArticles)

    return (
        <>
            {displayedArticles.map((article) => {
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
                                    {/* {article.fields.images.map((image) => {
                                        return (
                                            <Image 
                                                borderRadius='lg'
                                                mb={5}
                                                src={image.fields.imageFile.fields.file.url} 
                                                alt={image.fields.imageDescription} 
                                                key={image.sys.id} 
                                            />
                                        )
                                    })} */}
                                </Box>
                                <Box>
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

export default Articles;