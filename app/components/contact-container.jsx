'use client';
import { useState } from "react"

export const ContactContainer = () => {

    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [isButtonSubmitClicked, setIsButtonSubmitClicked] = useState(false)

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
                setSubmitted(true)
                setIsButtonSubmitClicked(false)
            }
        })
    }
    return (
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md relative">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Me</h2>
            <p className="mb-8 lg:mb-12 font-normal text-center text-gray-700 sm:text-xl">Be free to send me a message with the form bellow. <br />
                Hope to see you soon ! :)</p>
            <form action="#" className="space-y-8">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email / name</label>
                    <input
                        type="email"
                        id="email"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 focus:ring-primary-500"
                        placeholder="name@gmail.com / John Doe"
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
                {/* <button
                    type="submit"
                    className="w-[136px] py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={(e) => {
                        handleSubmit(e);
                        setIsButtonSubmitClicked(true);
                    }}
                >
                    {isButtonSubmitClicked ? (
                        <>
                            <svg aria-hidden="true" className="w-3 h-3 px-12 py-2.5 text-white animate-spin fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                        </>
                    ) : 'Send Message'}
                </button> */}


                <button
                    type="submit"
                    disabled={isButtonSubmitClicked}
                    className={`w-[136px] py-3 ${isButtonSubmitClicked ? 'px-[35px]' : 'px-5'} text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                    onClick={(e) => {
                        handleSubmit(e);
                        setIsButtonSubmitClicked(true);
                    }}
                >
                    {isButtonSubmitClicked ? 'Sending...' : 'Send Message'}
                </button>
            </form>

            <div className="absolute bottom-[-15px] md:bottom-3 text-green-500">
                {submitted && <p>Message sent successfully</p>}
            </div>
        </div>
    )
}