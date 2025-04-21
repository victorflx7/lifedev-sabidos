import React, { useEffect, useState } from 'react';
import styles from "./Register.module.css";
import { auth } from '../../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useAuthentication } from '../../hooks/useAuthentication';

const Register = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmasenha, setConfirmasenha] = useState("");
    const [erroSenha, setErroSenha] = useState("");
    const [erroCadastro, setErroCadastro] = useState("");
    const [ loading, setLoading] = useState(false);
  
    

    useEffect(() => {
        if (senha && confirmasenha && senha !== confirmasenha) {
            setErroSenha("as senhas estão diferentes");
        } else if (senha&& senha.length < 6 ) {
            setErroSenha("A senha precisa conter pelo menos 6 caracteres");
        } else {
            setErroSenha("");
        }
    }, [senha, confirmasenha]);

    const handlerSubmit = async (e) => {
        e.preventDefault();

        if (!nome || !email || !senha || !confirmasenha) {
            alert("Preencha corretamente todos os campos");
            return;
        }

        if (senha !== confirmasenha) {
            alert("As senhas estão diferentes")
            return;
        }

        try {
            setLoading(true);
            await createUserWithEmailAndPassword(auth, email, senha);
            alert("Cadastro realizado com sucesso!");
        
    
        setNome("");
        setEmail("");
        setSenha("");
        setConfirmasenha("");
        setErroCadastro("");
} catch (error) {
    setErroCadastro("Erro ao cadastrar usuário:" + error.message);
}finally{
    setLoading(false);
}
    };

    return (
        <div className={styles.container}>
            <h1 className="register-title">Cadastre-se para fazer parte do LifeDev</h1>
            <p className={styles.subtitle}>Crie seu usuário e faça parte dessa história</p>

            <form onSubmit={handlerSubmit} className="register-form">
                <label className={styles.label}>Nome:</label>
                <input
                    type="text"
                    placeholder="Insira o nome de usuário"
                    className={styles.input}
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />

                <label className={styles.label}>E-mail:</label>
                <input
                    type="email"
                    placeholder="Insira o seu E-mail "
                   className={styles.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label className={styles.label}>Senha:</label>
                <input
                    type="password"
                    placeholder="Insira a senha"
                   className={styles.input}
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />

                <label className={styles.label}>Confirme sua senha:</label>
                <input
                    type="password"
                    placeholder="Confirme sua senha"
                    className={styles.input}
                    value={confirmasenha}
                    onChange={(e) => setConfirmasenha(e.target.value)}
                />

                {erroCadastro && <p className={styles.error}>{erroCadastro}</p>}
                <button type="submit"  className={styles.button} disabled={loading}>
                    {loading ? "Cadastrando..." : "Cadastrar"}
                </button>
            </form>
        </div>
    );
};


export default Register;
