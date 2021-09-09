import { useState } from 'react';
import Input from '../Input/Input';
import './registration.scss'

function Registration() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (<form className="form" action="" method="post" onSubmit={onSubmit}>
        <legend className="form__legend">Registration</legend>
        <Input value={email} onChange={setEmail} label={'Email'} type={'email'} />
        <Input value={password} onChange={setPassword} label={'Password'} type={'password'} />
        <Input value={confirmPassword} onChange={setConfirmPassword} label={'Repeat password'} type={'password'} />
        <button type="submit" className="form__button">Sign up</button>
    </form>);
}

export default Registration;