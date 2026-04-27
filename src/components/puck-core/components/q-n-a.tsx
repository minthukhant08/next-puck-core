'use client'

import { useEffect, useState, ChangeEvent } from "react"
import json from "./data.json"

type AnswersOptions = {
    id: number,
    text: string
}
type Question = {
    text: string,
    answer: number,
    options: AnswersOptions[]
}
type QuestionResponse = {
    question: Question
}

export default function QNA() {
    const [data, setData] = useState<QuestionResponse | undefined>()
    const [selectedOption, setSelectedOption] = useState<number | null>(null)

    const getQuestion = () => {
        setTimeout(() => setData(json as QuestionResponse), 3000)
    }

    useEffect(() => {
        getQuestion()
    }, [])

    const handleOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(parseInt(e.target.value))
    }

    return (
        <div style={{ padding: "20px" }}>
            {!data ? (
                "loading..."
            ) : (
                <div>
                    <h3>{data.question.text}</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        {data.question.options.map((opt) => (
                            <label key={opt.id} style={{ cursor: "pointer", display: "block" }}>
                                <input
                                    type="radio"
                                    name="qna-options"
                                    value={opt.id}
                                    checked={selectedOption === opt.id}
                                    onChange={handleOptionChange}
                                    style={{ marginRight: "10px" }}
                                />
                                {opt.text}
                            </label>
                        ))}
                        <div className="mt-6 min-h-[60px] transition-all duration-300">
                            {selectedOption !== null && (
                                <div className="animate-in fade-in slide-in-from-top-2">
                                    {selectedOption === data?.question.answer ? (
                                        <div className="flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 p-4 text-green-800 shadow-sm">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-200 text-green-700">
                                                <span className="text-sm">✓</span>
                                            </div>
                                            <div>
                                                <p className="font-bold">Correct!</p>
                                                <p className="text-sm opacity-90">You nailed it. Keep up the good work!</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-red-800 shadow-sm">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-200 text-red-700">
                                                <span className="text-sm">✕</span>
                                            </div>
                                            <div>
                                                <p className="font-bold">Not quite...</p>
                                                <p className="text-sm opacity-90">That wasn't the right answer. Give it another shot!</p>
                                            </div>
                                        </div>
                                    )}
                                <button>Success</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}