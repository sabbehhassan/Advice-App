import { useState } from 'react'
import './App.css'

function App() {
  const [advice, setAdvice] = useState("")
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)

  async function getAdvice() {
    setLoading(true)
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()
    setAdvice(data.slip.advice)
    setCount((prev) => prev + 1)
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:w-96 w-full text-center space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 font-sans tracking-tight">
          {advice || (loading ? "Loading advice..." : "Click the button to get advice")}
        </h1>
        <button
          onClick={getAdvice}
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out shadow-lg"
        >
          {loading ? "Please wait..." : "Get Advice"}
        </button>
        <p className="text-sm text-gray-500">
          Advice fetched: {count} {count === 1 ? "time" : "times"}
        </p>
      </div>
    </div>
  )
}

export default App
