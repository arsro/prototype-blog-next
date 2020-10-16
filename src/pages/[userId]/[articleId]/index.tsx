import {useRouter} from 'next/router'
import {NextPage} from 'next'

import {useGetArticleLazyQuery, useGetArticleQuery} from '@/generated/graphql'
import { route } from 'next/dist/next-server/server/router'

const ArticlePage: NextPage = () => {
  const router = useRouter()
  const {articleId} = router.query

  const {loading, error,data} = useGetArticleQuery({
    variables: {
      id: articleId as string,
    }
  })

  if (loading) {
    return <p>...Loading</p>
  }

  if (error) {
    return <p>{error.toString()}</p>
  }

  return <div>{JSON.stringify(data)}</div>
}

export default ArticlePage