import { Github, Instagram, Linkedin } from "lucide-react"

interface PersonalProps{
    Lang : string | null, 
}

const PersonalCard = ({Lang}:PersonalProps) => {
  return (
    <div id="About" className=" bg-white h-screen w-full items-center px-5 flex flex-col justify-center md:flex-row-reverse gap-2 md:px-14 md:gap-10 dark:bg-black"> 
    <div className="flex justify-center w-full  mt-10 ">
        <img src="/Profile.jpeg" alt="My Photo" className="size-fit max-w-60 mt-5  rounded-lg shadow-md md:w-full md:max-w-[400px]"/>
    </div>
        
        <div className="flex flex-col gap-1 text-center md:text-left flex-shrink-0 md:w-1/2">
            <h1 className="font-bold text-xl text-sky-700 dark:text-sky-500">
            {Lang ==="EN"? 'Hello Everyone 👋' : 'Hallo Semuannya👋' } 
            </h1>
            <h1 className="font-extrabold  text-2xl dark:text-white">
               Bagus Mustaqim 
            </h1>
            <h2 className="font-bold text-xl dark:text-slate-300 ">
            {Lang ==="EN"? 'Student' : 'Pelajar' } 
            </h2>
            <p className="text-justify pt-2 text-base md:text-lg">
            {Lang ==="EN"? "Nice to meet you! My name is Bagus Mustaqim. Im born on Ngawi at September 2004. I am currently studying for a bachelor's degree in physics at Institut Teknologi Sepuluh Nopember Surabaya. Im  a responsible, hardworking and highly dedicated person. Besides physics, Im interested in web development. "
             : 
            'Senang bertemu dengan Anda! Namaku Bagus Mustaqim. Aku lahir di Kota Ngawi pada September 2004. Saya Sekarang sedang menempuh pendidikan S1 di Jurusan Fisika Instirur Teknologi Sepuluh Nopember Surabaya. Saya bertanggung jawab, pekerja keras, dan sangat berdidikasi tinggi. Disamping fisika, saya juga tertari pada web development' } 
               
            </p>

        <div className="flex flex-row md:flex-col justify-center items-center md:items-start py-5 gap-6">
            <div className=" flex  justify-center flex-row md:justify-start gap-6"> 
                <a href="https://www.instagram.com/bagustaqim_?igsh=ZWxwajlsbHl2dGlx">
                    <div className="flex rounded-md h-10  w-14 bg-[#1b1b1b] items-center justify-center group hover:bg-gray-700">
                    <Instagram className="text-white size-4/6  group-hover:text-sky-500"/>
                </div>            
                </a>
                <a href="https://www.instagram.com/bagustaqim_?igsh=ZWxwajlsbHl2dGlx">
                    <div className="flex rounded-md h-10  w-14 bg-[#1b1b1b] items-center justify-center group hover:bg-gray-700">
                    <Linkedin className="text-white size-4/6 group-hover:text-sky-500"/>
                </div>            
                </a>
                <a href="https://github.com/Bagus135/">
                    <div className="flex rounded-md h-10  w-14 bg-[#1b1b1b] items-center justify-center group hover:bg-gray-700">
                    <Github className="text-white size-4/6 group-hover:text-sky-500"/>
                </div>            
                </a>
            </div>
                <button id="downloadBtn" value="unduh" className="flex rounded-md h-10 px-2  bg-[#1b1b1b] items-center justify-center text-white font-semibold md:mt-12 w-1/3 md:w-56 md:h-12 group hover:bg-gray-700 hover:text-sky-500" onClick={CVDownloader}>
                    Download CV
                </button> 
            </div>
        </div>
    </div>
)
}

const CVDownloader = () => {
    const link = document.createElement("a")
    link.href = 'Bagus M_CV.pdf'
    link.download = 'CV.pdf'
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link)
}


export default PersonalCard