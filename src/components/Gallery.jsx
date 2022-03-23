
import Image1 from "../images/Image1.jpg"
import image2 from "../images/image2.jpg"
import image3 from "../images/image3.jpg"
import image4 from "../images/image4.jpg"
import image5 from "../images/image5.jpg"

const Gallery = () => {
  return (
    // <div className="min-h-screen"> 
<div id="art" className="max-w-screen min-h-screen p-4 bg-black  px-4 sm:px-6 lg:px-8 py-20 ">
    <div className="relative">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2 lg:max-w-2xl ml-auto">
                
                <h4 className="mt-2 text-2xl leading-8 font-extrabold text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
                    Here is some of my art work.
                </h4>
                <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                   I have a lot of artworks, but I choosed these four to give you an idea about what i do, you can see a lot of my work on Instagram.
                </p>
                
            </div>
            <div className="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
                <div className="relative space-y-4">
                    <div className="flex items-end justify-center mx-20 lg:justify-start space-x-4">
                        <img className="rounded-lg shadow-lg w-32 md:w-56" width="200" src={Image1} alt="1"/>
                        <img className="rounded-lg shadow-lg w-40 md:w-64" width="260" src={image2} alt="2"/>
                    </div>
                    <div className="flex items-start justify-center lg:justify-start space-x-4 ml-2">
                        <img className="rounded-lg shadow-lg w-24 md:w-40" width="170" src={image3} alt="3"/>
                        <img className="rounded-lg shadow-lg w-32 md:w-56" width="200" src={image4} alt="4"/>
                        <img className="rounded-lg shadow-lg w-32 md:w-56" width="200" src={image5} alt="4"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default Gallery