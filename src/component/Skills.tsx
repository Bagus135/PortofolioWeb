interface SkillsProps{
    Lang: string | null,
}

const Skills = ({Lang}:SkillsProps) => {
  return (
    <div id="Skills" className="h-screen w-full flex flex-col items-center md:flex-row px-5 md:px-14 gap-3 md:gap-10 bg-gray-700 justify-center">
       
        <div className="flex flex-col gap-1 md:w-1/2 mb-5">
            <h1 className="font-extrabold text-2xl text-sky-500">
                MY SKILLS
            </h1>
            <h2 className="font-bold text-justify mb-3 text-white">
                {Lang==="EN" ? "Being in physics doesn't mean you can't learn about web development?" : "Berada di jurusan fisika bukan berarti tidak bisa belajar tentang pengembangan web?"}
            </h2>
            <p className=" text-justify text-gray-200">
                {Lang==="EN" ? 'Im interest in web development so i studying programming language and some framework that i usually use in my personal project': 'Saya tertarik pada pengembangan web sehingga saya belajar bahasa pemrograman dan beberapa framework yang biasanya saya gunakan dalam proyek pribadi saya'}
            </p>
         </div>

        <div className="flex flex-col w-full md:w-1/2 gap-5">

            <div className="flex flex-col w-full gap-1">
                <div className="flex flex-row w-full justify-between ">
                    <div className="flex flex-row gap-2">
                        <img src="https://www.svgrepo.com/show/303206/javascript-logo.svg" alt="icon" className="size-fit  w-6 max-w-10"/>
                        <p className="relative text-gray-200">JavaScript</p>
                    </div>
                    <p className="text-gray-200">90%</p>
                </div>
                <progress className="progress progress-info w-full relative" value="90" max="100"></progress>
            </div>
            
            <div className="flex flex-col w-full gap-1">
                <div className="flex flex-row w-full justify-between ">
                    <div className="flex flex-row gap-2">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="icon" className="size-fit  w-6 max-w-10"/>
                        <p className="relative text-gray-200">TypeScript</p>
                    </div>
                    <p className="text-gray-200">70%</p>
                </div>
                <progress className="progress progress-info w-full fill-sky-500s" value="70" max="100"></progress>
            </div>

            <div className="flex flex-col w-full gap-1">
                <div className="flex flex-row w-full justify-between ">
                    <div className="flex flex-row gap-2">
                        <img src="https://www.svgrepo.com/show/376344/python.svg" alt="icon" className="size-fit w-6 max-w-10"/>
                        <p className="relative text-gray-200">Python</p>
                    </div>
                    <p className="text-gray-200">50%</p>
                </div>
                <progress className="progress progress-info w-full" value="50" max="100"></progress>
            </div>

            <div className="flex flex-col w-full gap-1">
                <div className="flex flex-row w-full justify-between ">
                    <div className="flex flex-row gap-2">
                        <img src="/react.svg" alt="icon" className="size-fit  w-6 max-w-10"/>
                        <p className="relative text-gray-200">ReactJS</p>
                    </div>
                    <p className="text-gray-200">85%</p>
                </div>
                <progress className="progress progress-info w-full" value="85" max="100"></progress>
            </div>

            <div className="flex flex-col w-full gap-1">
                <div className="flex flex-row w-full justify-between ">
                    <div className="flex flex-row gap-2">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="icon" className="size-fit  w-6 max-w-10"/>
                        <p className="relative text-gray-200">TailwindCSS</p>
                    </div>
                    <p className="text-gray-200">70%</p>
                </div>
                <progress className="progress progress-info w-full" value="70" max="100"></progress>
            </div>
           
            <div className="flex flex-col w-full gap-1">
                <div className="flex flex-row w-full justify-between ">
                    <div className="flex flex-row gap-2">
                        <img src="/express.png" alt="icon" className="size-fit  w-6 max-w-10"/>
                        <p className="relative text-gray-200">ExpressJS</p>
                    </div>
                    <p className="text-gray-200">70%</p>
                </div>
                <progress className="progress progress-info w-full" value="70" max="100"></progress>
            </div>

            <div className="flex flex-col w-full gap-1">
                <div className="flex flex-row w-full justify-between ">
                    <div className="flex flex-row gap-2">
                        <img src="/prisma.svg" alt="icon" className="size-fit  w-6 max-w-10"/>
                        <p className="relative text-gray-200">Prisma</p>
                    </div>
                    <p className="text-gray-200">70%</p>
                </div>
                <progress className="progress progress-info w-full" value="70" max="100"></progress>
            </div>

        </div>
    </div>
  )
}

export default Skills