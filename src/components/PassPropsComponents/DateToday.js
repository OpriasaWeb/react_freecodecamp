
// Stateless functional components
// Wherein we can place an argument to perform specific task
const DateToday = (props) => {
  return(
    <div>
      <p>Current date is: {props.date}</p>
    </div>
  )
} 

export default DateToday
