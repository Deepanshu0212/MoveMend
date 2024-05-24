import React, { useState, useEffect } from 'react';
import "../css/calender.css"
import { Link, useLocation } from 'react-router-dom'
import Time from '../Components/Time';
import Needform from '../Components/Needform';
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
const Calendar = () => {

    const location = useLocation();
    const {name,ser} = location.state || {};

    const currentDate = new Date();
    const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
    const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

    const [selecteddate, setselecteddate] = useState("")

    const [dis, setdisplay] = useState(true)
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    // useEffect(() => {
    //     console.log("useeffect")
    //     console.log(selecteddate);

    // }, [selecteddate]);
    const generateCalendar = () => {
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        const dates = [];
        for (let i = 0; i < firstDayOfMonth; i++) {
            dates.push(<li key={`empty-${i}`} className="calendar-date inactive-date"></li>);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const isSelectedDate = currentDate > new Date(currentYear, currentMonth, i);
            dates.push(
                <li key={i} className={`calendar-date ${isSelectedDate ? 'inactive-date' : ''}`} onClick={() => selectDate(i)}>
                    {i}
                </li>
            );
        }

        return dates;
    };

    const selectDate = (day) => {
        const selectedDate = new Date(currentYear, currentMonth, day);
        const formattedDate = selectedDate.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

        // Handle your logic for displaying the selected date
        console.log(formattedDate);
        setselecteddate(formattedDate);
        console.log("normal")
        console.log(selecteddate);
        setdisplay(false);

    };

    const prevMonth = () => {
        setCurrentMonth(currentMonth - 1);
        if (currentMonth < 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        }
    };

    const nextMonth = () => {
        setCurrentMonth(currentMonth + 1);
        if (currentMonth > 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        }
    };

    return (
        <div class="cal">
            <Navbar logo="/MovemendLogo.png" />
            <div style={{height: "15vh"}}></div>
            <div class="container">
                <div class="row">
                    {dis && <div className="col-md-7 div1">
                        <br /><br />
                        <h4>Select a date for your Session</h4>
                        <br /><br />
                        <div className="calendar-container">
                            <header className="calendar-header">
                                <span className="chevron-icons" onClick={prevMonth}>&lt;</span>
                                <h2 className="calendar-month">{monthNames[currentMonth]} {currentYear}</h2>
                                <span className="chevron-icons" onClick={nextMonth}>&gt;</span>
                            </header>
                            <div className="calendar-body">
                                <ul className="calendar-weekdays">
                                    <li>Sun</li>
                                    <li>Mon</li>
                                    <li>Tue</li>
                                    <li>Wed</li>
                                    <li>Thu</li>
                                    <li>Fri</li>
                                    <li>Sat</li>
                                </ul>
                                <ul className="calendar-dates">
                                    {generateCalendar()}
                                </ul>
                            </div>
                        </div>
                    </div>}

                    {!dis && <Time date={selecteddate} setdisplay={setdisplay} practitioner={name} service={ser}/>}

                    <div class="col-md-4">
                        <Needform />
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default Calendar;
