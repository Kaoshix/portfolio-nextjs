'use client';
import { useState } from "react"

export const ContactContainer = () => {

    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [isButtonSubmitClicked, setIsButtonSubmitClicked] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
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
                setSubmitted(true)
                setIsButtonSubmitClicked(false)
            }
        })
    }
    return (
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md relative">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Me</h2>
            <p className="mb-8 lg:mb-12 font-normal text-center text-gray-700 sm:text-xl">Reach out anytime. <br />Hope to see you soon ! :)</p>
            <form action="#" className="space-y-8">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email / name</label>
                    <input
                        type="email"
                        id="email"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 focus:ring-primary-500"
                        placeholder="johndoe@gmail.com / John Doe"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                    <textarea
                        id="message"
                        rows="8"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Leave a message..."
                        onChange={(e) => setMessage(e.target.value)}
                    >
                    </textarea>
                </div>

                <button
                    type="submit"
                    disabled={isButtonSubmitClicked}
                    className={`w-[136px] whitespace-nowrap py-3 ${isButtonSubmitClicked ? 'px-[35px]' : 'px-5'} text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                    onClick={(e) => {
                        handleSubmit(e);
                        setIsButtonSubmitClicked(true);
                    }}
                >
                    {isButtonSubmitClicked ? 'Sending...' : 'Send Message'}
                </button>
            </form>

            <div className="absolute bottom-[42.5px] left-[200px] md:bottom-3 md:left-0 text-green-500">
                {submitted && <p>Message sent</p>}
            </div>
        </div>
    )
}