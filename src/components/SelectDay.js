import React from 'react';

export default function SelectDay(props) {
    return(
        <div className="dropdownDays">
            <label className="visuallyHidden" htmlFor="days">please select a day to get results for that day</label>
            <select name="days" id="days" onChange={props.getDay}>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
            </select>
        </div>
    )
}
