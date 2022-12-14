import React, {useContext, useState} from "react";
import { AuthContext } from "./auth";

const CreateUser = () => {
    const auth = useContext(AuthContext)
    const [form, setForm] = useState({email:'',passwd:''})
    const onChange = campo => evt => {
        setForm({
            ...form,
            [campo]: evt.target.value
        })
    }
    //condition to render form builder else to have user data
    if(auth.user !== null){
        return null
      }
    return (
        <>
        <h3>Criar nova conta</h3>
        {
        auth.createUser.createUserState.error !== '' && 
        <p>{auth.createUser.createUserState}</p>
        }
        <input type='text' placeholder="Seu e_mail" value={form.email} onChange={onChange('email')}/>
        <input type='password' placeholder="Sua senha" value={form.passwd} onChange={onChange('passwd')}/>
            <button onClick={()=> {
auth.createUser.createUser(form.email,form.passwd)
            }}>CREATE</button>
        </>
    )
}
export default CreateUser