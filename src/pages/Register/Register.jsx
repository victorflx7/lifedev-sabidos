import styles from "./Register.module.css"
import { useEffect, useState } from "react"
import { useAuthentication } from '../../hooks/useAuthentication'


const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [displayName, setDisplayName] = useState("")
    const [confirmPassword, SetConfirmPassword] = useState("")
    const [error, setError] = useState("")

    const { createUser, error: authError, loading } = useAuthentication()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")

        const user = {
            displayName,
            email,
            password,
        }
        if (password !== confirmPassword) {
            setError("As Senhas precisam se iguais.")
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
            <h1>Cadastre-se para postar</h1>
            <p>Crie seu usuario e compatilhe suas historias</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input type="text" name="displayName" required placeholder="Nome do Usuario" onChange={(e) => setDisplayName(e.target.value)}
                        value={displayName} />
                </label>
                <label>
                    <span>E-mail:</span>
                    <input type="email" name="email" required placeholder="E-mail do Usuario" onChange={(e) => setEmail(e.target.value)}
                        value={email} />
                </label>
                <label>
                    <span>Senha:</span>
                    <input type="password" name="password" required placeholder="Insira a senha" onChange={(e) => setPassword(e.target.value)}
                        value={password} />
                </label>
                <label>
                    <span>Confirmação de senha:</span>
                    <input type="password" name="confirmPassword" required placeholder="Confirme a senha" onChange={(e) => SetConfirmPassword(e.target.value)}
                        value={confirmPassword} />
                </label>
                {!loading && <button className="btn">Entrar</button>}
                {loading && (<button className="btn" disabled >Aguarde....</button>)}
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    )
}

export default Register
