'use client';
import { useState } from "react"

export const Form = () => {

    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('Sending')
        const data = {
            email,
            message
        }

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            if (res.status === 200) {
                console.log('Success');
                console.log(res);
                setSubmitted(true)
            }
        })
    }
    return (
        <div className="w-[300px] p-5">
            <form className="flex flex-col gap-5">
                <div>
                    <label htmlFor='email'>Email</label>
                    <input className="border border-black" type='email' name='email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='message'>Message</label>
                    <input className="border border-black" type='text' name='message' onChange={(e) => setMessage(e.target.value)} />
                </div>
                <input type='submit' onClick={(e) => handleSubmit(e)} />
            </form>
        </div>
    )
}