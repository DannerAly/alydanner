import { useEffect, useState } from "react";
import InfiniteMenu from "../utils/InfiniteMenu";


function Proyectos() {
  const [show, setShow] = useState(false);

  useEffect(()=>{
    setShow(true);
  },[]);

  const items = [
  {
    image: 'https://picsum.photos/300/300?grayscale',
    link: 'https://google.com/',
    title: 'Trivas para stands',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/400/400?grayscale',
    link: 'https://google.com/',
    title: 'Item 2',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/500/500?grayscale',
    link: 'https://google.com/',
    title: 'Item 3',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/600/600?grayscale',
    link: 'https://google.com/',
    title: 'Item 4',
    description: 'This is pretty cool, right?'
  }
];

  
  return (
   <main className={`flex flex-col md:flex-row gap-8  items-center justify-center pt-24 
                      transition-opacity duration-700 ${show ? "opacity-100" : "opacity-0"} `}>
       
        <div style={{ height: '600px', position: 'relative' }}>
  <InfiniteMenu items={items}/>
</div>

      </main>
  );
}

export default Proyectos;
