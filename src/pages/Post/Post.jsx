import React from 'react'
import Styles from './Post.module.css'

import { useFetchDocument } from '../../hooks/useFetchDocument'
import { useParams } from 'react-router-dom'

const Post = () => {
  const { id } = useParams()
  const { document: post} = useFetchDocument('posts', id)
  return (
    <>
      <div className={Styles.post_container}>
        {post && (
          <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <h3>Este post trata sobre:</h3>
            <div className={Styles.tags}>
              {post.tags.map((tag) => (
                <p key={tag}><span>#</span>{tag}</p>
              ))}
            </div>

          </>

        )}

      </div>

    </>
  )
}

export default Post
