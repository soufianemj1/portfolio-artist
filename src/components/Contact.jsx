import contact from "../images/contact.png"
const Contact = () => {
  return (
    <div id="contact">
        
   <div className="py-4 bg-black text-white">
        <div className="container mx-auto flex flex-col md:flex-row my-12 md:my-36">
      <div className="flex flex-col w-full lg:w-2/5 p-8">
        <p className="text-3xl md:text-5xl text-yellow-500 my-4 leading-relaxed md:leading-snug">Contact me</p>
        <p className="font-sans text-sm md:text-lg my-2 md:my-4"><svg className="inline-block fill-current mr-2"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
          </svg>Rabat, Morocco</p>
        <p className="font-sans text-sm md:text-lg my-2 md:my-4"><svg className="inline-block fill-current mr-2"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" />
          </svg> hiba.ri@gmail.com</p>
        
        <p className="font-sans text-sm md:text-lg my-2 md:my-4">Or find me on Instagram by clicking at <span><a className="text-yellow-500" href="">@hiba_ri</a></span>, I'll be happy to hear from you.</p>
      </div>
      <div className=" flex flex-col lg:w-3/5 justify-center w-full lg:-mt-12">
        <div className="container">
          <div className="relative flex justify-center min-w-0 break-words w-full">
            <div className="flex justify-center p-5 lg:p-10">
              <img className="w-[60%]" src={contact} alt="contact image" />
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
    </div>
  )
}

export default Contact