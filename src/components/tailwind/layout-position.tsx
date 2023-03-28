const LayoutPosition = () => (
  <section className="p-10">
    <h1 className="my-8 text-2xl">Layout position</h1>

    <h3 className="my-8 text-xl">Positioning</h3>
    <div className="relative h-12 w-1/2 bg-red-200">
      <p>Relative parent</p>
      <div className="absolute bottom-0 right-0 bg-red-500">
        <p>Absolute child</p>
      </div>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4">
      <div>
        <h3 className="my-8 text-lg">Top left corner</h3>
        <div className="relative h-20 w-20 bg-yellow-100">
          <div className="absolute left-0 top-0 h-10 w-10 bg-yellow-300">
            01
          </div>
        </div>
      </div>

      <div>
        <h3 className="my-8 text-lg">Top right corner</h3>
        <div className="relative h-20 w-20 bg-yellow-100">
          <div className="absolute top-0 right-0 h-10 w-10 bg-yellow-300">
            03
          </div>
        </div>
      </div>

      <div>
        <h3 className="my-8 text-lg">Bottom left corner</h3>
        <div className="relative h-20 w-20 bg-yellow-100">
          <div className="absolute bottom-0 left-0 h-10 w-10 bg-yellow-300">
            07
          </div>
        </div>
      </div>

      <div>
        <h3 className="my-8 text-lg">Bottom right corner</h3>
        <div className="relative h-20 w-20 bg-yellow-100">
          <div className="absolute bottom-0 right-0 h-10 w-10 bg-yellow-300">
            09
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4">
      <div>
        <h3 className="my-8 text-lg">Span top edge</h3>
        <div className="relative h-20 w-20 bg-yellow-100">
          <div className="absolute inset-x-0 top-0 h-10 bg-yellow-300">02</div>
        </div>
      </div>
      <div>
        <h3 className="my-8 text-lg">Span left edge</h3>
        <div className="relative h-20 w-20 bg-yellow-100">
          <div className="absolute inset-y-0 left-0 w-10 bg-yellow-300">04</div>
        </div>
      </div>
      <div>
        <h3 className="my-8 text-lg">Span right edge</h3>
        <div className="relative h-20 w-20 bg-yellow-100">
          <div className="absolute inset-y-0 right-0 w-10 bg-yellow-300">
            06
          </div>
        </div>
      </div>
      <div>
        <h3 className="my-8 text-lg">Span bottom edge</h3>
        <div className="relative h-20 w-20 bg-yellow-100">
          <div className="absolute inset-x-0 bottom-0 h-10 bg-yellow-300">
            08
          </div>
        </div>
      </div>

      <div className="col-span-2">
        <h3 className="text-md my-8">Display classes</h3>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          <span className="inline font-bold">
            This is display inline and will wrap normally
          </span>
          sapiente ut rerum esse ullam provident, fugit
          <span className="inline-block font-bold">
            This is display inline-block and will not extend beyond it&apos;s
            parent
          </span>
          eos quam
          <span className="block font-bold">
            This is display block and will move to it&apos;s own line
          </span>
          reprehenderit est hic aut unde sequi, officia, ipsa amet doloribus
          ratione
          <span className="hidden font-bold">
            This is display none and will not display at all
          </span>
          ad.
        </div>
      </div>

      <div className="col-span-2">
        <h3 className="my-8 text-xl">Z-index</h3>
        <div className="relative h-36">
          <div className="absolute top-0 left-0 z-20 h-20 w-20 bg-blue-200">
            1
          </div>
          <div className="absolute top-5 left-16 z-10 h-20 w-20 bg-blue-300">
            2
          </div>
          <div className="absolute top-10 left-24 z-40 h-20 w-20 bg-blue-400">
            3
          </div>
          <div className="absolute top-15 left-32 z-50 h-20 w-20 bg-blue-500">
            4
          </div>
          <div className="absolute top-5 left-40 z-0 h-20 w-20 bg-blue-600">
            5
          </div>
        </div>
      </div>

      <div className="col-span-2">
        <h3 className="my-8 text-xl">Floats</h3>
        <div className="max-w-[300px] md:w-1/2">
          <img
            className="float-right h-48 w-48"
            src="/images/tailwind/img1.jpg"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            numquam voluptatem accusantium atque cupiditate nulla ratione saepe
            veniam, ex iure nisi mollitia sed rerum veritatis temporibus iusto!
            Molestiae, ratione doloribus?
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default LayoutPosition;
