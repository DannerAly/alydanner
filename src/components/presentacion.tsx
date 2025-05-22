import TiltedCard from './Imagen';
import Aly from '../assets/images/aly.png';
export default function Presentacion() {
    return (

        <div className='flex flex-col md:flex-row md:items-center md:mt-4 md:gap-x-10'>
            <div className="text-center text-white mt-4">
                <h1 className="text-2xl font-bold">Aly Danner</h1>
                <p className="text-base">Artista Digital (Artista, Desarrollador, Productor Audiovisual)</p>
               
            </div>

            <div className="flex items-center justify-center mt-5" >
                <TiltedCard
                    imageSrc={Aly}
                    altText="Aly Danner"
                    captionText="Aly Danner"
                    containerHeight="150px"
                    containerWidth="150px"
                    imageHeight="150px"
                    imageWidth="150px"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                        <p className="tilted-card-demo-text">
                        </p>
                    }
                />
            </div>
        </div>

    );
}