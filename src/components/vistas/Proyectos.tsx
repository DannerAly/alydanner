import { useEffect, useState } from "react";

function Proyectos() {
  const [show, setShow] = useState(false);

  useEffect(()=>{
    setShow(true);
  },[]);
  

  
  return (
   <main className={`flex flex-col md:flex-row gap-8  items-center justify-center pt-24 
                      transition-opacity duration-700 ${show ? "opacity-100" : "opacity-0"} `}>
        <div className="h-[200px] md:h-[400px] md:w-[400px] w-full flex items-center justify-center">
         HOla
        </div>
        <div className="z-10 w-full md:w-[400px] flex flex-col items-center ">
          <div className="mx-10 md:mx-0" >
           Hola
          </div>
        HOla
        </div>
      </main>
  );
}

export default Proyectos;
