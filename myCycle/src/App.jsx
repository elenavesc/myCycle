import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';

function App() {
  const [date, setDate] = useState(new Date());


  const onChange = (date) => {
    alert(date)
    setDate(date);
  };

  return <>
  <DatePicker 
    selected={date} 
    onChange={(date) => onChange(date)} 
    withPortal
    showTimeSelect
    timeFormat='p'
    timeIntervals={60}
    dateFormat='Pp'
    calendarClassName='style-calendar'
    className='style-input'
    />
  </>;
  
}

export default App
