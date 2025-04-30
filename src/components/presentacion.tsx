import TiltedCard from './Imagen';
import Aly from '../assets/images/aly.png';
export default function Presentacion() {
    return (

        <div className="flex flex-raw items-center justify-center h-screen bg-gradient-to-b from-[#042F40] to-[#042F40]">
            <TiltedCard
                imageSrc={Aly}
                altText="Aly Danner"
                captionText="Aly Danner"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
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
            <div className="text-center text-white mt-4">
                <h1 className="text-2xl font-bold">Hola, soy Aly Danner</h1>
                <p className="text-lg">Desarrollador Web/Mobile & Productor Audiovisual</p>
                <h1>In progress...</h1>

            </div>
        </div>

    );
}