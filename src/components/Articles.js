import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Articles = ({articles}) => {
    console.log(articles);

    return (
        <>
        {articles.map((article) => {
            return (
        <div className="article" key={article.sys.id}>
            <h2>{article.fields.title}</h2>
            <p>{article.fields.subtitle}</p>
            <div>{documentToReactComponents(article.fields.arti)}</div>
        </div>   
            )
        })}
        </>
    )

}

export default Articles;