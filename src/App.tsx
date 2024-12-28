import { useEffect, useState } from "react"
import Navbar from "./component/navbar"
import PersonalCard from "./component/personalCard"
import Project from "./component/project"
import Skills from "./component/Skills"

function App() {
  const [Lang, setLanguage] = useState(localStorage.getItem("Lang") === null ? "EN" : localStorage.getItem("Lang"))
  useEffect(()=>{
    localStorage.setItem("Lang", Lang!)
  },[Lang])

return (
<>
  <Navbar Lang={Lang} setLanguage={setLanguage}/>
  <PersonalCard Lang={Lang}/>
  <Skills Lang={Lang}/>
  <Project Lang={Lang}/>
</>
)  
}

export default App
