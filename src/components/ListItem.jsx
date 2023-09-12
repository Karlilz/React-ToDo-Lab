import React from 'react'

const ListItem = (props) => {
  return (
    <div>
        <li>Call Mom</li>
        <li>Schedule Dentist Apt</li>
        <li>Order Cat Food</li>
        <li>Fold Laundry</li>
        <li>Reschedule Dance Class</li>
        <li>Finish React Assignment</li>
        {props.doThis}
    </div>
  )
}

export default ListItem