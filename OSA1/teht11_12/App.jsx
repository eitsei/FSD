const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <>
      <p>{props.content} {props.exercises}</p>
    </>
  )

}

const Content = (props) => {
  return (
    <>
      <Part content = {props.part11} exercises = {props.exercises11}/>
      <Part content = {props.part22} exercises = {props.exercises22}/>
      <Part content = {props.part33} exercises = {props.exercises33}/>
    </>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <>
      <p>Number of exercises {props.exercises11 + props.exercises22 + props.exercises33}</p>
    </>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header  course  = {course} />
      <Content part11 = {part1} exercises11 = {exercises1}/>
      <Content part22 = {part2} exercises22 = {exercises2}/>
      <Content part33 = {part3} exercises33 = {exercises3}/>
      <Total exercises11 = {exercises1} exercises22 = {exercises2} exercises33 = {exercises3}/>
    </div>
  )
}

export default App
