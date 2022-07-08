import { useParams, Link } from "react-router-dom";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Text, Image } from '@chakra-ui/react';
import { Container } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import serverURL from "../serverURL";

const Article = () => {
    const { articleID } = useParams();

    const [targetArticle, setTargetArticle] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(`${serverURL}/api/alpha/articles/${articleID}`)
          .then((res) => res.json())
          .then ((data) => {
            setTargetArticle(data);
            setIsLoading(false);
          });
      }, []);

      console.log(targetArticle)


      if (isLoading) {
        return <p>Loading...</p>
      }


    return (
        <Container 
            className="targeted-article" 
            key={targetArticle.id}
            display='flex'
            flexDirection='column'
            alignItems='center'
        >
                <Text 
                    fontSize='2xl'
                    fontWeight='bold'
                    mb='10px'
                >{targetArticle.title}</Text>
                <Image  
                                        borderRadius='lg'    
                                        src={`${serverURL}/images/${targetArticle.image}`} 
                                        alt={targetArticle.image}   /> 
                <Text 
                    fontSize='2xl' 
                    mt='25px'
                >{targetArticle.subtitle}</Text>
                <Text 
                    mb='25px' 
                    mt='25px' 
                >{targetArticle.text}</Text>
                <Container 
                    mb={2} 
                    className="articles-author"
                    fontSize='sm'

                >
                    {/* <Text>Author: {targetArticle.fields.articleAuthor.fields.authorName}</Text>
                        <Link 
                            className='author-link'
                            to={`/author/${targetArticle.fields.articleAuthor.sys.id}`}
                        >Read about me.</Link> */}
                </Container>
        </Container>
    );
};

export default Article;