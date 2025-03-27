'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function QuoteBox() {
    const [quote, setQuote] = useState('Loading quote...')
    const [isLoading, setIsLoading] = useState(false)

    const fetchQuote = async () => {
        setIsLoading(true)
        try {
            const response = await fetch('https://api.chucknorris.io/jokes/random?category=dev')
            const data = await response.json()
            setQuote(data.value)
        } catch (error) {
            setQuote('Failed to load quote. Please try again. ' + error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchQuote().then(r => r)
    }, [])

    return (
        <div
            className="flex flex-row items-center justify-center p-8 bg-white rounded-lg shadow-lg max-w-2xl mx-auto my-8">
            <div className="mb-8">
                <div className="w-64 h-64 overflow-hidden flex items-center justify-center">
                    <Image
                        src="/avatar.png"
                        alt="Profile Avatar"
                        width={256}
                        height={256}
                        className="w-full h-full p-3 object-cover"
                    />
                </div>
            </div>

            <div className="text-center mb-8">
                <blockquote className="text-xl italic text-gray-700 mb-4">
                    &#34;{quote}&#34;
                </blockquote>
                <p className="text-gray-500">- Chuck Norris</p>
                <button
                    onClick={fetchQuote}
                    disabled={isLoading}
                    className={`px-6 py-2 mt-4 rounded-md text-white ${isLoading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
                >
                    {isLoading ? 'Loading...' : 'New Quote'}
                </button>
            </div>
        </div>
    )
}