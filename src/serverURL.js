let url;

const { REACT_APP_PRODUCTION_URL, REACT_APP_DEVELOPMENT_URL, NODE_ENV } = process.env;

if (NODE_ENV === 'production') {
    url = REACT_APP_PRODUCTION_URL
} else {
    url = REACT_APP_DEVELOPMENT_URL
}
console.log(url);
export default url;