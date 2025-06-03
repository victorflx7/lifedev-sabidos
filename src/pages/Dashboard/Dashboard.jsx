import React from 'react'
import style from './Dashboard.module.css'
import { Link } from 'react-router-dom'

import { useAuthValue } from '../../context/AuthContext'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useFetchDocument } from '../../hooks/useFetchDocument'

const Dashboard = () => {
  const { user } = useAuthValue()
  const uid = user.uid

  const { documents: posts, loading } = useFetchDocuments('posts', null, uid)
  const { deleteDocument } = useFetchDocument('posts')
  console.log(posts)
  console.log(uid)

  return (
    <div className={Styles.Dashboard}>
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts</p>
      {posts && posts.length === 0 && (

        <div className="noposts">
          <p>Não foram encontrados posts</p>
          <Link to="/posts/create" className="btn">Criar primeiro post</Link>
        </div>
      )(
        <div className={styles.post_header}>
          <span>Título</span>
          <span>Ações</span>
        </div>
      )}

      {posts && posts.map((post) => (


        <div className={styles.post_row} key={post.id}>
          <span>{post.title}</span>
          <div className={styles.actions}>
            <Link to={`/posts/${post.id}`} className="btn btn-outline">Ver</Link>
            <Link to={`/posts/edit/${post.id}`} className="btn btn-outline">Editar</Link>
            <button className="btn btn-outline btn-danger" onClick={() => deleteDocument(post.id)}>Excluir</button>
          </div>
        </div>
      ))}


    </div>
  )
}

export default Dashboard
