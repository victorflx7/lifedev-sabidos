import styles from "./Search.module.css"
import Post from "../Post/Post"

import { useFetchDocuments } from "../../hooks/useFetchDocuments"
import { useQuery } from "../../hooks/useQuery"

import PostDetail from '../../components/PostDetail'
import { Link } from "react-router-dom"


const search = () => {
    const query = useQuery()
    const search = query.get("q")

    const { documents: posts } = useFetchDocuments("posts", search)
    return (
        <div className={styles.search_container}>
            <h1>Resultado encontrados{search}</h1>
            <div className="post-list">

                {posts && posts.length === 0 && (
                    <>
                        <p>Nao foram encontrados posts a partir da sua busca....</p>
                        <Link to="/" className='btn btn-dark'>
                            Voltar
                        </Link>
                    </>
                )}

                {posts && posts.map((post) => <Post key={post.id} post={post} />)}


            </div>
        </div>
    );
}
export default search