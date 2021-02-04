import Axios from 'axios';
import { useEffect, useState } from 'react';
import { FETCH } from '../../Fetch';
import './loginForm.css';

const LoginForm = () => {
    const [users, setUsers] = useState([]);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        Axios.get(`${FETCH}/login`).then((res) => setUsers(res.data));
    }, []);

    const handleSubmit = (e) => {
        if(userName === users.userName && password === users.password){
            console.log("You're connected")
        }else{
            console.log("cannot connect")
        }
    }
    console.log('users :' + users.userName + 'username :' + userName + 'password :' + password);
    return (
        <form>
            <label>Nom d'utilisateur :
                <input type="text" name="userName" value={userName} onChange={(e) => setUserName(e.target.value)} />
            </label>
            <label>Not de passe :
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit" value="submit" onClick={handleSubmit}>Connexion</button>
        </form>
    )
}

export default LoginForm;