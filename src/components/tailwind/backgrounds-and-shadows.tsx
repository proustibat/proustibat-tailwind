const BackgroundandShadows = () => (
  <section className="p-10">
    <h1 className="my-8 text-2xl">Background and shadows</h1>

    <div
      className="h-64 w-72 bg-blue-500 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/tailwind/img1.jpg')",
      }}
    ></div>

    <div className="h-24 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
    <div className="h-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

    <div className="mt-6 ml-4 p-3 shadow-md md:w-96">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
      deleniti iusto delectus alias natus quam dolor explicabo quas eius!
    </div>
    <div className="mt-6 ml-4 p-3 shadow-lg md:w-96">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
      deleniti iusto delectus alias natus quam dolor explicabo quas eius!
    </div>
    <div className="mt-6 ml-4 p-3 shadow-xl md:w-96">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
      deleniti iusto delectus alias natus quam dolor explicabo quas eius!
    </div>
    <div className="mt-6 ml-4 p-3 shadow-2xl md:w-96">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
      deleniti iusto delectus alias natus quam dolor explicabo quas eius!
    </div>
    <div className="mt-6 ml-4 p-3 shadow-inner md:w-96">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
      deleniti iusto delectus alias natus quam dolor explicabo quas eius!
    </div>
    <div className="mt-6 ml-4 p-3 shadow-xl shadow-blue-500/50 md:w-96">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
      deleniti iusto delectus alias natus quam dolor explicabo quas eius!
    </div>
    <div className="mt-6 ml-4 p-3 shadow-xl shadow-red-500/100 md:w-96">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
      deleniti iusto delectus alias natus quam dolor explicabo quas eius!
    </div>

    <div className="flex justify-center -space-x-24">
      <div className="... bg-blue-400 mix-blend-multiply">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
        deleniti iusto delectus alias natus quam dolor explicabo quas eius!
      </div>
      <div className="... bg-pink-400 mix-blend-multiply">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
        deleniti iusto delectus alias natus quam dolor explicabo quas eius!
      </div>
    </div>
  </section>
);

export default BackgroundandShadows;
