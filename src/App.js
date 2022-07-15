import './App.css';
import { Calendar, daeFnsLocalizer, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

const locales = {
  "en-US" : require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})


const events = [
  {
  title : "Big Meeting",
  allDay : true,
  start: new Date(2022,7,1),
  end: new Date(2022,7,1),
},
{
  title : "Vacation",
  // allDay : true,
  start: new Date(2022,6,7),
  end: new Date(2022,6,10),
},
{
  title : "Conference",
  // allDay : true,
  start: new Date(2022,6,1),
  end: new Date(2022,6,4),
}
]


function App() {

  const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""})
  const [allEvents, setAllEvents] = useState(events)

  const handleAddEvents = () => {
    setAllEvents([...allEvents, newEvent])
  }

  return (
    <div className="App">
      <h2>Add New Event</h2>
      <div>
        <input type="text" placeholder ="Add Title" style={{width: "20%", marginRight: "10px"}} value={newEvent.title} 
        onChange = { (event) => {setNewEvent({...newEvent, title: event.target.value})}}/>
      </div>
      <ReactDatePicker placeholderText='Start Date' style={{ marginRight: "0px"}} selected={newEvent.start} onChange={ (start) => {setNewEvent({...newEvent, start})}} />
      <ReactDatePicker placeholderText='End Date' style={{ color: "pink"}} selected={newEvent.end} onChange={ (end) => {setNewEvent({...newEvent, end})}} />

      <button style={{background: "blue", color: "white", marginTop: "10px", padding: "5px 10px", cursor: "pointer", border: "none"}} onClick={handleAddEvents}>Add Event</button>

      <Calendar localizer={localizer} events={allEvents} startAccessor='start' endAccessor='end' style={{height: 500, margin : "50px"}} />
    </div>
  );
}

export default App;
