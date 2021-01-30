import ArticleItem from './ArtileItem'

const ArticleList = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
      {articles.map(article => (
        <ArticleItem article={article} />
      ))}
    </div>
  )
}

export default ArticleList
