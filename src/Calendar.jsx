import React from 'react';
import './styles/Calendar.css'

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
    };
  }

  getFormattedMonth(date) {
    const options = { month: 'long', year: 'numeric' };
    const monthName = date.toLocaleDateString('fr-FR', options);
    return monthName.charAt(0).toUpperCase() + monthName.slice(1);
}
  render() {
    const { currentDate } = this.state;

    

    return (
      <div className='calendar-container'>
        <div className='calendar-header'>
          <button onClick={this.prevMonth}><b>&lt;</b></button>
          <span><b>{this.getFormattedMonth(currentDate)}</b></span>
          <button onClick={this.nextMonth}><b>&gt;</b></button>
        </div>
        <table className='calendar-table'>
          <thead>
            <tr>
              <th>Di</th>
              <th>Lu</th>
              <th>Ma</th>
              <th>Me</th>
              <th>Je</th>
              <th>Ve</th>
              <th>Sa</th>
            </tr>
          </thead>
          <tbody>
            {this.renderCalendarDays()}
          </tbody>
        </table>
      </div>
    );
  }

  isToday(date) {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }
  

  renderCalendarDays() {
    const { currentDate } = this.state;
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const startOffset = firstDayOfMonth.getDay();
  
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  
    const rows = [];
    let cells = [];
    let dayCounter = 0;
  
    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 7; col++) {
        if (row === 0 && col < startOffset) {
          cells.push(<td key={`empty-${col}`}></td>);
        } else if (dayCounter < daysInMonth) {
          const day = days[dayCounter];
          const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
          const isToday = this.isToday(date);
          const className = isToday ? 'today' : '';
  
          cells.push(<td key={`day-${day}`} className={className}>{day}</td>);
          dayCounter++;
        }
      }
  
      rows.push(<tr key={`row-${row}`}>{cells}</tr>);
      cells = [];
    }
  
    return rows;
  }
  

  prevMonth = () => {
    const { currentDate } = this.state;
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    this.setState({ currentDate: newDate });
  }

  nextMonth = () => {
    const { currentDate } = this.state;
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    this.setState({ currentDate: newDate });
  }
}

export default Calendar;
