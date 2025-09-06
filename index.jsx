import { useState, useEffect } from "react";

const DateAndClock = ({
    w = "130px",
    h = "",
    isDayNameRequired = true,
    dateProps = "px-2",
    clockProps = "px-2",
    generalProps = "p-2 flex justify-center items-center text-center border rounded-lg m-1 w-auto",
    dayNameProps = "flex items-center justify-center bg-black text-white rounded-md p-2 font-bold text-4xl",
}) => {
    const getFormattedDate = () => {
        const now = new Date();
        const day = String(now.getDate()).padStart(2, "0");
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const year = now.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const dayName = new Date()
        .toLocaleDateString("en-US", { weekday: "short" })
        .toUpperCase();

    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [date, setDate] = useState(getFormattedDate);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
            setDate(getFormattedDate());
            setDayName(now.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div
            className={generalProps}
            style={{ minWidth: w, height: h, width: "fit-content" }}
        >
            <div>
                <h1 className={dateProps}>{date}</h1>
                <h1 className={clockProps}>{time}</h1>
            </div>
            {isDayNameRequired && <div className={dayNameProps}>
                <h1>{dayName}</h1>
            </div>}
        </div>
    );
};

export default DateAndClock;
