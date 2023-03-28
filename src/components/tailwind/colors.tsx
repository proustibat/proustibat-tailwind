const Colors = () => (
  <section className="p-10">
    <h1 className="my-8 text-2xl">Colors</h1>

    <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
      <div className="border-2 p-1">
        <h3 className="my-8 text-xl">Text colors</h3>
        <p className="text-black">Tailwind is awesome</p>
        <p className="text-red-50">Tailwind is awesome</p>
        <p className="text-red-100">Tailwind is awesome</p>
        <p className="text-red-200">Tailwind is awesome</p>
        <p className="text-red-300">Tailwind is awesome</p>
        <p className="text-red-400">Tailwind is awesome</p>
        <p className="text-red-500">Tailwind is awesome</p>
        <p className="text-red-600">Tailwind is awesome</p>
        <p className="text-red-700">Tailwind is awesome</p>
        <p className="text-red-800">Tailwind is awesome</p>
        <p className="text-red-900">Tailwind is awesome</p>
      </div>

      <div className="border-2 p-1">
        <h2 className="my-8 text-xl">Background colors</h2>
        <div className="bg-slate-600">
          <p className="text-white">Tailwind is awesome</p>
        </div>
        <div className="bg-zinc-400">
          <p className="text-white">Tailwind is awesome</p>
        </div>
        <div className="bg-emerald-600">
          <p className="text-white">Tailwind is awesome</p>
        </div>
      </div>

      <div className="border-2 p-1">
        <h2 className="my-8 text-xl">Text underline</h2>
        <p className="text-red-700 underline decoration-red-700">
          Tailwind is awesome
        </p>
        <p className="text-blue-700 underline decoration-blue-700">
          Tailwind is awesome
        </p>
      </div>

      <div className="col-span-2 border-2 p-1 md:col-auto">
        <h2 className="my-8 text-xl">Border colors</h2>
        <input className="m-1 border-2 border-rose-500 outline-none" />
        <input className="m-1 border-2 border-blue-300 outline-none" />
        <input className="m-1 border-2 border-purple-900 outline-none" />
        <input className="m-1 border-2 border-yellow-500 outline-none" />
      </div>

      <div className="border-2 p-1">
        <h2 className="my-8 text-xl">Divide colors</h2>
        <div className="divide-y divide-blue-200">
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 4</div>
          <div>Item 5</div>
          <div>Item 6</div>
        </div>
      </div>

      <div className="border-2 p-1">
        <h2 className="my-8 text-xl">Outline colors</h2>
        <button className="mx-2 outline outline-blue-500">Subscribe</button>
        <button className="mx-2 outline outline-purple-300">Subscribe</button>
        <button className="mx-2 outline outline-gray-500">Subscribe</button>
      </div>

      <div className="border-2 p-1">
        <h2 className="my-8 text-xl">Box shadow colors</h2>
        <button className="bg-cyan-500 shadow-lg shadow-cyan-500">
          Subscribe
        </button>
        <button className="bg-blue-500 shadow-lg shadow-blue-500/50">
          Subscribe
        </button>
        <button className="bg-indigo-500 shadow-lg shadow-indigo-500/50">
          Subscribe
        </button>
      </div>

      <div className="border-2 p-1">
        <h2 className="my-8 text-xl">Accent colors</h2>
        <input type="checkbox" className="ml-2 accent-purple-500" checked />
        &nbsp;Option 1
        <input type="checkbox" className="ml-2 accent-pink-500" checked />
        &nbsp;Option 2
        <input type="checkbox" className="ml-2 accent-red-300" checked />
        &nbsp;Option 3
      </div>

      <div className="border-2 p-1">
        <h2 className="my-8 text-xl">Arbitrary colors</h2>
        <div className="h-10 bg-[#427fab]">Hello</div>
        <div className="h-10 text-[#427fab]">Hello</div>
        <div className="h-10 border border-[#427fab]">Hello</div>
      </div>
    </div>
  </section>
);

export default Colors;
