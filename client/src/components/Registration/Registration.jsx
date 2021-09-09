import Input from '../Input/Input';
import './registration.scss'

function Registration() {
    return ( <form className="form" action="" method="post">
                <legend className="form__legend">Registration</legend>
                <Input label={'Email'} type={'email'}/>
                <Input label={'Password'} type={'password'}/>
                <Input label={'Repeat password'} type={'password'}/>
                <button type="submit" className="form__button">Sign up</button>
            </form> );
}

export default Registration;