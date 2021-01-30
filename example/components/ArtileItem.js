import Link from 'next/link'

const ArtileItem = ({ article }) => {
  return (
    <Link href="/article/[id]" as={`article/${article.id}`}>
      <a className="bg-black text-white p-3 m-6">
        <h3 className="mb-10">{article.title} &rarr;</h3>
        <p className="mb-10">{article.body}</p>
      </a>
    </Link>
  )
}

export default ArtileItem
