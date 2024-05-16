import React from 'react';
import Help from '../assets/Help.png';

const HelpDetails = () => {
  return (
    <>
        <div className="relative mb-20">
            <img src={Help} alt="Help" className="w-full h-auto lg:h-96 h-108 mb-8 object-cover" />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
                <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-3xl lg:text-5xl font-bold ">
                    How may we help you?
                </h1>
                </div>
            </div>
        </div>
        <p className='max-w-5xl text-justify pl-20'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, unde libero! Obcaecati eos, ratione quasi animi distinctio nobis possimus! Quod rerum laudantium blanditiis sequi nisi harum tempore, dolor exercitationem, cum aperiam architecto! Et dolores sit voluptas ducimus eveniet aliquid cum assumenda eos. Nam laboriosam praesentium temporibus perspiciatis voluptate natus in doloribus quaerat atque adipisci cum hic harum distinctio, exercitationem maiores error corrupti. Rem, natus quia. Sapiente rerum ipsam, ut ratione reprehenderit vero, consequuntur porro earum mollitia in obcaecati sunt unde incidunt. Quis at, veniam, explicabo ea natus reiciendis quo mollitia eum delectus blanditiis dolore saepe placeat itaque voluptate quas quisquam.
        </p>
        <p className='max-w-5xl text-justify pl-20 pt-8'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, in facere! Voluptates labore delectus, totam fuga sunt, ut accusamus ad maxime vero dolor porro quis amet placeat obcaecati tenetur corporis?
        </p>
    </>
  );
};

export default HelpDetails;
