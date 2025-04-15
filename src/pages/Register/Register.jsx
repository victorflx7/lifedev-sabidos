import styles from "./Register.module.css"
import { useEffect, useState } from "react"
import { useAuthentication } from "../../hooks/useAuthentication"

const Register = () => {
    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    const { createUser, error: authError, loading } = useAuthentication()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")

        const user = {
            displayName,
            email,
            password
         
        }

        if (password !== confirmPassword) 
        {
            setError("As senhas precisam ser iguais")
            return
        }

        const res = await createUser(user)

        console.log(res)
    }

    useEffect(() => {
        if (authError) {
            setError(authError)
        }
    }, [authError])

    return (
        <div className={styles.register}>
            <h1>Cadastre-se</h1>
            <p>Crie sua conta para começar a usar o sistema</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input
                        type="text"
                        name="displayName"
                        required
                        placeholder="Nome do usuário"
                        onChange={(e) => setDisplayName(e.target.value)}
                        value={displayName}
                        
                    />
                </label>
                <label>
                    <span>Email:</span>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email do usuário"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        
                    />
                </label>
                <label>
                    <span>Senha:</span>
                    <input
                        type="password"
                        name="password"
                        required
                        placeholder="Senha do usuário"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        
                    />
                </label>
                <label>
                    <span>Confirme a senha:</span>
                    <input
                        type="password"
                        name="confirmPassword"
                        required
                        placeholder="Confirme a senha do usuário"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                        
                    />
                </label>

                {!loading && (
                    <button className="btn">Entrar</button>
                )}
                {loading && (
                    <button className="btn" disabled>Aguarde...</button>
                )}
                {error && <p className={styles.error}>{error}</p>}
            </form>
        </div>
    )
}

export default Register