import React from 'react'
import { useState } from 'react'
import './form.css'

const Form = () => {
    const [name, setname] = useState('')
    const [mail, setmail] = useState('')
    const [password, setpassword] = useState('')
    const [confpassword, setconfpassword] = useState('')

    const [errename,errsetname] = useState('')
    const [errmail, errsetmail] = useState('')
    const [errpassword, errsetpassword] = useState('')
    const [errconfpassword, errsetconfpassword] = useState('')

    const [namecolor, setnamecolor] = useState('')
    const [mailcolor, setmailcolor] = useState('')
    const [passwordcolor, setpasswordcolor] = useState('')
    const [confpasswordcolor, setconfpasswordcolor] = useState('')

    const validate = (e) => {
        // e.preventDefault()
        (name.length > 8) ? errsetname('') && setnamecolor('green') : errsetname('user name must be 8 letters long') && setnamecolor('red')
        (mail.includes('@gmail')) ? errsetmail('') && setmailcolor('green') : errsetmail('email must include @gmail') && setmailcolor('red')
        (password.length > 8) ? errsetpassword('') && setpasswordcolor('green') : errsetpassword('password should be 8 characters') && setpasswordcolor('red')
        (password != '' && password === confpassword) ? errsetconfpassword('') && setconfpasswordcolor('green') : errsetconfpassword('password must match') && setconfpasswordcolor('red')
    }

  return (
    <div className="card">
    <form >
        <input type="text" placeholder='Name' value={name} style={{ borderColor: namecolor }} onChange={e => setname(e.target.value)} />
        <p className='error'>{errename}</p>

        <input type="text" placeholder='Email' value={mail} onChange={e => setmail(e.target.value)} />
        <p className='error'>{errmail}</p>

        <input type="password" placeholder='Password' value={password} onChange={e => setpassword(e.target.value)} />
        <p className='error'>{errpassword}</p>

        <input type="password" placeholder='confirm_Password' value={confpassword} onChange={e => setconfpassword(e.target.value)} />
        <p className='error'>{errconfpassword}</p>

        <button className="submit_btn" onClick={validate}>Submit</button>
    </form>
    </div>
  )
}

export default Form