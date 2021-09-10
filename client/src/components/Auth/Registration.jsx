import { useState } from 'react';
import { registration } from '../../utils/user';
import Input from '../Input/Input';
import './form.scss'

function Registration() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            return alert('Passwords should be equal')
        }

        registration(email, password)
    }

    return (<form className="form" action="" method="post" onSubmit={onSubmit}>
        <legend className="form__legend">Registration</legend>
        <Input value={email} onChange={setEmail} label={'Email'} type={'email'} required={true}/>
        <Input value={password} onChange={setPassword} label={'Password'} type={'password'} required={true}/>
        <Input value={confirmPassword} onChange={setConfirmPassword} label={'Repeat password'} type={'password'} required={true}/>
        <button type="submit" className="form__button">Sign up</button>
    </form>);
}

export default Registration;