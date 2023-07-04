import "../../../App.css"
import HeroPhoto from "../../../assets/Fallow/Fallow06.webp";
const Hero = () => {
  return (
    <>
      <div className="w-full h-screen HeroSection bg-cover bg-center bg-no-repeat">
        <div className="container">
          <div className="md:flex block mx-auto sm:relative sm:translate-y-0 absolute top-[50%] translate-y-[-50%] " >
            <div className="sm:block hidden">
              <h1>Hey, I am</h1>
              <h1>Richard Lord Product Designer</h1>
              <p>
                Agency work with top rated talented people <br /> provide
                qulaity services.
              </p>
            </div>
            <div className="my-0 mr-[-145px] ml-0 p-0 sm:w-full w-[90%] " >
              <img src={HeroPhoto} className="max-w-full h-auto" alt="/" />
            </div>
            <div className="sm:hidden text-center ">
              <h1>Hey, I am</h1>
              <h1>Richard Lord Product Designer</h1>
              <p>
                Agency work with top rated talented people <br /> provide
                qulaity services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
