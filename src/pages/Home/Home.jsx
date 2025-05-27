
import styles from './Home.module.css'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useNavigate } from 'react-router-dom'
import PostDatail from '../../components/PostDetail';

const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <h1>Veja os nossos post mais recentes </h1>
        <form className={styles.searchForm} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ou busque por tags..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className='btn btn-dark'>Pesquisar</button>
        </form>
        <div className="post-list">
          {loading && <p>Carregando...</p>}
          {posts && posts.length === 0 && (
            <div className={styles.noposts}>
              <p>Nao foram encontrados</p>
              <Link to="/post/create" className="btn">Criar Primeiro post</Link>
            </div>
          )}
          {posts && posts.map((post) => (<PostDatail post={post} key={post.id} />))}
        </div>
      </div>
    </>
  )
}

export default Home