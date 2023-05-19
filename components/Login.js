import React from 'react'
import { login } from '../operations/register'

export default function Login() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('submitting')
        console.log(password, email)
        const response = await login({ email: email, password: password }).then((res) => {
            console.log(res)
            console.log(res.status)
            console.log(res.message)
            if (res.status === 200) {
                console.log('success')
            } else {
                console.log('failure')
            }
        })
    }
    return (
        <form onSubmit={handleSubmit} className="max-w-[250px] bg-blue">
            <div className="mb-6">
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
            </div>
            <div className="mb-6">
                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    )
}