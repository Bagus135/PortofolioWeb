interface ProjectProps{
  Lang:  string | null,
}

const Project = ({Lang}:ProjectProps) => {
  return (
    <div id="Projects" className=" h-auto flex flex-col px-3 md:px-14 gap-3 md:gap-10 md:items-center justify-center py-10 mt-10">
         <div className="flex flex-col gap-1 md:w-1/2 mb-5 justify-center">
            <h1 className="font-extrabold text-2xl text-center dark:text-white">
                MY PROJECT
            </h1>
            <h2 className="font-bold text-lg mb-3 text-center dark:text-sky-500">
                {Lang ==='EN' ? "Being in physics doesn't mean you can't create project about web development?"
                : "Berada di jurusan fisika bukan berarti tidak bisa membuat proyek tentang pengembangan web?"
                }
            </h2>
        </div>
    
        <div className="w-full flex flex-wrap   justify-center lg:justify-around">
          <div className="mb-12 p-4 lg:w-5/12 flex flex-col">
            <div className="rounded-md shadow-md overflow-hidden hover:shadow-black cursor-pointer ">
              <a href="https://fislab-1.vercel.app">
              <img src="Fislab1.png" alt="" width='w-full'  className="h-72 w-full"/>
              </a>
            </div>
            <h3 className="font-bold w-max text-2xl  text-black mt-5 mb-2  hover:text-sky-500 cursor-pointer dark:text-white dark:hover:text-sky-500">
              <a href="https://fislab-1.vercel.app">
              Fislab I
              </a>
            </h3>
            <p className="font-medium text-base text-slate-500 dark:text-gray-200">
              {Lang ==="EN"? "Website for Practicum Fisika Laboratorium 1" : "Website untuk Praktikum Fisika Laboratorium 1"}
            </p>
          </div>

          <div className="mb-12 p-4 lg:w-5/12 flex flex-col">
            <div className="rounded-md shadow-md overflow-hidden hover:shadow-black cursor-pointer ">
              <a href="https://chatapp-jf3o.onrender.com/">
              <img src="ChatApp.png" alt="" width='w-full'  className="h-72 w-full"/>
              </a>
            </div>
            <h3 className="font-bold w-max text-2xl  text-black mt-5 mb-2  hover:text-sky-500 cursor-pointer dark:text-white dark:hover:text-sky-500">
              <a href="https://chatapp-jf3o.onrender.com/">
              Chat App
              </a>
            </h3>
            <p className="font-medium text-base text-slate-500 dark:text-gray-200">
              {Lang==="EN" ? 'Simple Chat App using PERN Stack and Socket IO' : 'Aplikasi Chat Sederhana menggunakan PERN Stack dan Socket IO'}
            </p>
          </div>

          <div className="mb-12 p-4 lg:w-5/12 flex flex-col">
            <div className="rounded-md shadow-md overflow-hidden hover:shadow-black cursor-pointer ">
              <a href="https://applist-8bhw623w3-bagus-ms-projects.vercel.app/">
              <img src="ListApp.png" alt="" width='w-full'  className="h-72 w-full"/>
              </a>
            </div>
            <h3 className="font-bold w-max text-2xl  text-black mt-5 mb-2  hover:text-sky-500 cursor-pointer dark:text-white dark:hover:text-sky-500">
              <a href="https://applist-8bhw623w3-bagus-ms-projects.vercel.app/">
              List App
              </a>
            </h3>
            <p className="font-medium text-base text-slate-500 dark:text-gray-200">
              {Lang==='EN' ? 'First Project with PERN Stack that i use for Practice' : 'Proyek pertama dengan PERN Stack yang saya gunakan untuk latihan'}
            </p>
          </div>

          <div className="mb-12 p-4 lg:w-5/12 flex flex-col">
            <div className="rounded-md shadow-md overflow-hidden hover:shadow-black cursor-pointer ">
              <a href="https://fislab-ii.vercel.app/">
              <img src="Fislab2.png" alt="" width='w-full'  className="h-72 w-full"/>
              </a>
            </div>
            <h3 className="font-bold w-max text-2xl  text-black mt-5 mb-2  hover:text-sky-500 cursor-pointer dark:text-white dark:hover:text-sky-500">
              <a href="https://fislab-ii.vercel.app/">
              Source Code Fislab 2
              </a>
            </h3>
            <p className="font-medium text-base text-slate-500 dark:text-gray-200">
              {Lang==="EN" ? 'I replaced python with JavaScript for science data processing' : 'Saya mengganti python dengan JavaScript untuk pengolahan data ilmiah'}
            </p>
          </div>

          <div className="mb-12 p-4 lg:w-5/12 flex flex-col">
            <div className="rounded-md shadow-md overflow-hidden hover:shadow-black cursor-pointer ">
              <a href="https://dailylist-reactapp.vercel.app/">
              <img src="DailyApp.png" alt="" width='w-full'  className="h-72 w-full"/>
              </a>
            </div>
            <h3 className="font-bold w-max text-2xl  text-black mt-5 mb-2  hover:text-sky-500 cursor-pointer dark:text-white dark:hover:text-sky-500">
              <a href="https://dailylist-reactapp.vercel.app/">
              Daily List App
              </a>
            </h3>
            <p className="font-medium text-base text-slate-500 dark:text-gray-200">
              {Lang==="EN" ? 'My First Project in Web Development' : 'Proyek Pertama saya dalam Pengembangan Web'}
            </p>
          </div>

        </div>
    </div>
  )
}

export default Project