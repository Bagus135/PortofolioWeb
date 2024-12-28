import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

interface NavbarProps {
    Lang : string | null,
    setLanguage: (Lang: "EN" | "ID") => void
}

const Navbar = ({setLanguage, Lang} : NavbarProps) => {
    const mediaTheme =  window.matchMedia(`(prefers-color-scheme : light)`).matches ? "light": "dark"

    const [theme , setTheme] = useState(localStorage.getItem("theme")? localStorage.getItem("theme"): mediaTheme);
    const [hamburgerState, setHamburgerState] = useState(false)
    

    const handleToogle = (e:React.ChangeEvent<HTMLInputElement>) =>{
      if(e.target.checked){
        setTheme("dark")
      } else {
        setTheme("light")
      }
    }
  
    useEffect(()=>{
      localStorage.setItem("theme", theme!);
      const localTheme = localStorage.getItem("theme");
      
      if(localTheme === "light")  document.documentElement.classList.remove("dark")
      else document.documentElement.classList.add("dark")
      document.documentElement.setAttribute('data-theme',localTheme!)
    },[theme])
  
    ScrollNavbar()
    return (
     <div className="w-full">
        <header className="fixed w-full h-14 bg-white  border-b-2 flex flex-row justify-between px-2 md:px-5 items-center z-[50] dark:bg-gray-800">
          <p className="font-bold text-xl dark:text-white lg:text-2xl ">myCV</p>
          <div className="flex items-center lg:flex-row-reverse">
            <button className="btn btn-square btn-ghost text-xl font-bold dark:text-white hover:text-sky-500" onClick={()=>setLanguage(Lang === "EN" ? "ID" : "EN")}>
              {Lang === "EN" ? "EN" : "ID"}
            </button>
            <div  className="btn btn-square btn-ghost">
              <label className="swap swap-rotate w-12 h-12">
                <input type="checkbox" onChange={handleToogle} checked={theme === "light" ? false : true}/>
                <Sun className="w-8 h-8 swap-off" />
                <Moon className="w-8 h-8 swap-on text-sky-500" />
              </label>
            </div>
            <div  className="flex items-center py-4">
              <button id="hamburger" name="hamburger" type="button" onClick={()=>setHamburgerState(!hamburgerState)} className={`flex flex-row btn btn-square btn-ghost justify-center items-center py-3  lg:hidden ${!hamburgerState? '' : 'hamburger-active'} `}>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
              </button>

              <nav id="nav-menu" className={`${!hamburgerState? 'hidden' : ''} absolute py-5  bg-white shadow-md rounded-sm max-w-[150px] w-full shadow-black right-3 top-full mt-3 lg:block lg:bg-transparent lg:static lg:max-w-full 
              dark:lg:bg-transparent dark:lg:shadow-none lg:shadow-none lg:rounded- dark:bg-gray-800`}>
                <ul className="block lg:flex">
                  <li className="group ">
                    <a href="#About" className="text-base dark:text-white text-black py-2 mx-8 group-hover:text-sky-500 flex lg:h-14">{Lang ==="EN"? 'About':"Tentang"}</a>
                  </li>
                  <li className="group ">
                    <a href="#Skills" className="text-base dark:text-white text-black py-2 mx-8 group-hover:text-sky-500 flex">
                    {Lang ==="EN"? 'Skills' : 'Skill'}
                    </a>
                  </li>
                  <li className="group ">
                    <a href="#Projects" className="text-base  dark:text-white text-black py-2 mx-8 group-hover:text-sky-500 flex">
                      {Lang ==="EN"? 'Projects' : 'Proyek'}
                      </a>
                  </li>
                </ul>
              </nav>

            </div>
          </div>
        </header>
     </div> 
    )
}

const ScrollNavbar = () =>{
  window.onscroll = () => {
    const header = document.querySelector('header');
    const fixedNavbar = header?.offsetTop;

    if(window.scrollY > fixedNavbar!){
      header?.classList.add('navbar-fixed')
      header?.classList.remove('dark:bg-gray-800')
    } else {
      header?.classList.remove('navbar-fixed')
      header?.classList.add('dark:bg-gray-800')
    }
  }
}

export default Navbar