import React, { useEffect, useState } from "react"

const Banner = () => {
const [date, setDate] = useState("")
let currentDay
    useEffect (() => {
        const date = new Date();
        const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        const [nameDay, day, year] = [date.getDay(), date.getDate(), date.getFullYear()];
        const currentDay = `${weekDays[nameDay]} ${day}, ${year}`
        setDate(currentDay)
    }, [])
    
        return (
            <div>
                <h1>Picture of the Day: {date}</h1>
                <a>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em"><polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>
                    <polyline points="8 17 12 21 16 17"></polyline>
                    <line x1="12" y1="12" x2="12" y2="21"></line>
                    <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>
                    </svg>
                </a>
            </div>
        )
}

export default Banner