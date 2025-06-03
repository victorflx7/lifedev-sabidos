import React from 'react'
import styles from './Home.module.css'
import { useFetchDocument } from '../../hooks/useFetchDocument'
import { useNavigate } from 'react-router-dom'
import Postdetail from '../../components/Postdetail/Postdetail'


const Home = () => {
  const { documents: posts, loading } = useFetchDocument()
  const navigate = useNavigate()
  const [query, setQuery] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (query) {
      return navigate(`/search?q=${query}`)
    }

  }
  console.log(loading)
  return (
    <>
      <div>

        <h1>Veja os nossos posts mais recentes</h1>
        <form className={styles.search_Form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ou busque por tags..."
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn btn-dark">Pesquisar</button>
        </form>
        <div className="post-list">
          {loading && <p>Carregando...</p>}
          {posts && posts.length === 0 && (<div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className="btn">Criar primeiro post</Link>
          </div>
          )}
          {posts && posts.map((post) => (
            <Postdetail key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home