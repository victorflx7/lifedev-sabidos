import styles from './Search.module.css';

import { useFetchDocuments} from '../../hooks/useFetchDocuments';
import { userQuery } from '../../hooks/useQuery';
import PostDatail from '../../components/PostDetail';

import { Link } from 'react-router-dom';
const Search = () => {
    const query = userQuery();
    const search = query.get('q');

    const { documents: posts} = useFetchDocuments('posts', search);

    return (
    <>
            <div className={styles.search_container}>
                <h1>Resultados encontrados para : {search}</h1>
                <div className='post-list'>
                    {posts && posts.length === 0 && (
                        <>
                            <p>Nao foram encontrados posts a partir da sua busca...</p>
                            <Link to="/" className='btn btn-dark'>Voltar</Link>
                        </>
                    )}
                    {posts && posts.map((post) => (<PostDatail post={post} key={post.id} />))}
                </div>
            </div>
    </>
    );
}


export default Search
