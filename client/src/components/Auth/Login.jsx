import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { login } from '../../utils/user';
import Input from '../Input/Input';
import './form.scss'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(login(email, password))    
    }

    return (<form className="form" action="" method="post" onSubmit={onSubmit}>
        <legend className="form__legend">Authorization</legend>
        <Input value={email} onChange={setEmail} label={'Email'} type={'email'} required={true} />
        <Input value={password} onChange={setPassword} label={'Password'} type={'password'} required={true} />

        <button type="submit" className="form__button">Log In</button>
    </form>);
}

export default Login;