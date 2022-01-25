import React from 'react';
import {useState} from 'react';

const Form = ({filter}) => {
    const [form, setForm] = useState({name:'', username:'', email:''})
    const formFunc = (e) => {
        const data = {...form, [e.target.name]: e.target.value}
        setForm({...form, ...data})

    }

    const onSubmit = (e) => {
        e.preventDefault()
        filter(form)
    }
    return (
        <div>
            <form>
                <label>Name: <input type="text" name={'name'} value={form.name} onChange={formFunc}/></label>
                <label>Username: <input type="text" name={'username'} value={form.username} onChange={formFunc}/></label>
                <label>Email: <input type="text" name={'email'} value={form.email} onChange={formFunc}/></label>
                <button onClick={onSubmit}>Filter</button>
            </form>
        </div>
    );
};

export default Form;