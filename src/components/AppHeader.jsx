import reactLogo from "../assets/react.svg"

export default function AppHeader() {

  const title = 'React Shop'


  return (
    <header>

      <img src={reactLogo} alt="react logo" />
      <strong>{title}</strong>
    </header>
  )
}