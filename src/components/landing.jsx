import Profil from '../images/profil.png'
const Landing = () => {
  return (

      
    <div className="  min-h-screen flex flex-col justify-center items-center gap-y-12 bg-[url('https://i.imgur.com/zmacdcu.gif')]	">
           

        <div >
            <img className='rounded-full w-80 ' src={Profil} alt="" />
        </div>
        <div className='flex flex-col justify-center gap-y-4 items-center text-center mx-3 text-white '>
            <h1 className="text-3xl font-semibold "> Hey, I am hiba and I am an artist </h1>
            <p className='text-lg'>Hello everyone, my name is hiba, I am a 23 years old moroocan artist from Rabat city,<br/> I love to do alot of things but mainly I draw. decided to share my art with the world,<br/> so here I am.  hope you enjoy my work. </p>
        </div>
        <div className='text-white'>
            <button className='ring-2 ring-red-300 p-2 hover:p-3 rounded-lg	'>See my art !</button>
        </div>
        

    </div>
  )
}

export default Landing