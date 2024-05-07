import React from "react";

export function FeaturedImageGallery() {
  const data = [
    {
      imgelink:
        "https://i.ibb.co/c3fWCvV/louis-vuitton-hotel.jpg",
    },
    {
      imgelink:
        "https://i.ibb.co/vks3gZ6/crystal-shops-las-vegas-15-ar.jpg",
    },
    {
      imgelink:
        "https://i.ibb.co/T249SV0/vitesse-voiture-luxe-par-batiment-moderne-au-crepuscule-ai-generative-188544-8048.jpg",
    },
    {
      imgelink:
        "https://i.ibb.co/v49SYnd/hotel-louis-vuitton-paris.jpg",
    },
    {
      imgelink:
        "https://i.ibb.co/j64xmn1/Le-Magasins-d-Herm-s-Hong-Long-par-RDAI-Paris-2-715x410.jpg",
    },
  ];

  const [active, setActive] = React.useState(
    "https://i.ibb.co/c3fWCvV/louis-vuitton-hotel.jpg"
  );

  return (

    <div className="flex justify-center items-center h-screen bg-gray-100">

      <div className="p-8 border border-gray-300 rounded-lg shadow-lg">

        <h1 className="text-2xl text-amber-900 font-bold mb-4">React Image Gallery</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="md:col-span-1">

            <img className="w-full h-auto rounded-lg shadow-md object-cover object-center" src={active} alt=""/>
          </div>

          <div className="md:col-span-1 grid grid-cols-3 gap-4">
            {data.map(({ imgelink }, index) => (
              <div key={index}>
                <img onClick={() => setActive(imgelink)} src={imgelink} className={`w-full h-auto rounded-lg cursor-pointer transition duration-300 transform hover:scale-105 ${active === imgelink ? 'border-4 border-slate-950' : ''}`}
                  alt="gallery-image"
                />
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
    
  );
}