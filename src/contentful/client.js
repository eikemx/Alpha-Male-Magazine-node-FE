import { createClient } from "contentful";

// const { REACT_APP_CONTENTFUL_SPACE, REACT_APP_CONTENTFUL_ACCESSTOKEN } = process.env

const client = createClient ({
    space: process.env.REACT_APP_CONTENTFUL_SPACE, 
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESSTOKEN
});

export default client;