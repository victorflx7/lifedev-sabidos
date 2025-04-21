import react from 'react'
import styles from './Register.module.css'
import { useState, useEffect } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const [email, setEmail]= useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [name, setName] = useState('')
    const [confirmpassword, setConfirmpassword] = useState('')

    const {createUser, error:authError, loading} = useAuthentication()
    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setError('')
        const user = {
            email,
            password
        }
        const res = await createUser(user)
        console.table(res)
    }
    navigate("/Register")

    useEffect(()=>{
        if(authError){
            setError(authError)
        }
    })

    return (
        <div className={styles.register}>
            <h1>Cadastre-se no Nomad Life</h1>
            <form onSubmit ={handleSubmit}>
                <label>
                    <span>E-mail</span>
                    <input type='email'
                    name = 'email'
                    required
                    Value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder='Digite seu E-mail'></input>
                </label>
                <label>
                    <span>Nome</span>
                    <input type='text'
                    name = 'name'
                    required
                    Value={name}
                    onChange={(e)=>setName(e.target.value)}
                    placeholder='Digite seu Nome'></input>
                </label>
                <label>
                    <span>Senha</span>
                    <input type='password'
                    name = 'senha'
                    required
                    Value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder='Digite sua Senha'></input>
                </label>
                <label>
                    <span>Confirmar Senha</span>
                    <input type='password'
                    name = 'senha'
                    required
                    Value={confirmpassword}
                    onChange={(e)=>setConfirmpassword(e.target.value)}
                    placeholder='Confirme sua Senha'></input>
                </label>
                {!loading && <button className='bnt'>Cadastro</button>}
                {loading && <button className='bnt' disable>Aguarde...</button>}
                {error && <p className='error'>{error}</p>}
            </form>
        </div>

    )

}

export default Register