import Caroussel from "./Caroussel"
const Gallery = () => {
  return (
    <div className="min-h-screen">
        <div>
            <h1 className="text-center text-2xl font-semi-bold">Welcome to my gallery, here's some of my art</h1>
        </div>
        <div>
        <Caroussel/>
        </div>
    </div>
  )
}

export default Gallery