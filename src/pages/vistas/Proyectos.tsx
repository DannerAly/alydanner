import { useEffect, useState } from "react";
import RollingGallery from "../../components/utils/RollingGallery";

function Proyectos() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);


  return (
    <main className={`flex flex-col md:flex-row gap-8  items-center justify-center pt-24 
                      transition-opacity duration-700 ${show ? "opacity-100" : "opacity-0"} `}>

      <div style={{ height: '600px', position: 'relative' }}>

      </div>

  
<RollingGallery autoplay={true} pauseOnHover={true} />
    </main>
  );
}

export default Proyectos;
