const Sizing = () => (
  <section>
    <h1 className="my-8 p-10 text-2xl">Sizing</h1>

    <div className="my-8 grid divide-x divide-black sm:grid-cols-2 md:grid-cols-3">
      <div>
        <h3 className="my-8 text-xl">Width</h3>
        <div className="my-2 w-0 bg-black text-white">w-0</div>
        <div className="my-2 w-1 bg-black text-white">w-1</div>
        <div className="my-2 w-1.5 bg-black text-white">w-1.5</div>
        <div className="my-2 w-2 bg-black text-white">w-2</div>
        <div className="my-2 w-3 bg-black text-white">w-3</div>
        <div className="my-2 w-5 bg-black text-white">w-5</div>
        <div className="my-2 w-6 bg-black text-white">w-6</div>
        <div className="my-2 w-7 bg-black text-white">w-7</div>
        <div className="my-2 w-8 bg-black text-white">w-8</div>
        <div className="my-2 w-9 bg-black text-white">w-9</div>
        <div className="my-2 w-10 bg-black text-white">w-10</div>
        <div className="my-2 w-11 bg-black text-white">w-11</div>
        <div className="my-2 w-12 bg-black text-white">w-12</div>
      </div>

      <div>
        <h3 className="my-8 text-xl">By 2</h3>
        <div className="my-2 w-14 bg-black text-white">w-14</div>
        <div className="my-2 w-16 bg-black text-white">w-16</div>

        <h3 className="my-8 text-xl">By 4</h3>
        <div className="my-2 w-20 bg-black text-white">w-20</div>
        <div className="my-2 w-24 bg-black text-white">w-24</div>
        <div className="my-2 w-28 bg-black text-white">w-28</div>
        <div className="my-2 w-32 bg-black text-white">w-32</div>
        <div>...</div>
        <div className="my-2 w-36 bg-black text-white">w-36</div>

        <h3 className="my-8 text-xl">By 8</h3>
        <div className="my-2 w-64 bg-black text-white">w-64</div>

        <h3 className="my-8 text-xl">By 16</h3>
        <div className="my-2 w-80 bg-black text-white">w-80</div>
        <div className="my-2 w-96 bg-black text-white">w-96</div>

        <div className="my-2 w-auto bg-black text-white">Auto</div>
      </div>

      <div>
        <h3 className="my-8 text-xl">Percentages</h3>
        <div className="my-2 w-1/2 bg-green-500 text-white">w-1/2</div>
        <div className="my-2 w-1/3 bg-green-500 text-white">w-1/3</div>
        <div className="my-2 w-2/3 bg-green-500 text-white">w-2/3</div>
        <div className="my-2 w-1/4 bg-green-500 text-white">w-1/4</div>
        <div className="my-2 w-2/4 bg-green-500 text-white">w-2/4</div>
        <div className="my-2 w-3/4 bg-green-500 text-white">w-3/4</div>
        <div className="my-2 w-1/5 bg-green-500 text-white">w-1/5</div>
      </div>

      <div className="sm:col-span-2 md:col-span-3">
        <h3 className="my-8 text-xl">Width of the viewport</h3>
        <div className="my-2 w-screen bg-purple-500 text-white">w-screen</div>
      </div>

      <div className="md:col-span-3">
        <h3 className="my-8 text-xl">100% of container</h3>
        <div className="my-2 w-full bg-zinc-500 text-white">w-full</div>
      </div>

      <div>
        <h3 className="my-8 text-xl">min/max content</h3>
        <div className="my-2 w-min bg-emerald-500 text-white">w-min</div>
        <div className="my-2 w-max bg-emerald-500 text-white">w-max</div>
      </div>

      <div>
        <h3 className="my-8 text-xl">Arbitrary Width</h3>
        <div className="my-2 w-[150px] bg-red-500 text-white">150px</div>
      </div>

      <div className="md:col-span-3">
        <h3 className="my-8 text-xl">Max Width</h3>
        <div className="mx-auto max-w-lg bg-gray-100">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
          perferendis incidunt nihil ullam repellendus praesentium consectetur
          et sed distinctio, magni iusto quos repellat officiis cum dolore
          aliquid minus esse pariatur.
        </div>
      </div>
    </div>

    <div className="md:col-span-3">
      <h3 className="my-8 text-xl">
        Height (Most of the same options as widths)
      </h3>
      <div className="flex items-end">
        <div className="h-24 w-20 bg-orange-500">h-24</div>
        <div className="h-32 w-20 bg-orange-500">h-32</div>
        <div className="h-40 w-20 bg-orange-500">h-40</div>
        <div className="h-48 w-20 bg-orange-500">h-48</div>
        <div className="h-64 w-20 bg-orange-500">h-64</div>
        <div className="h-80 w-20 bg-orange-500">h-80</div>
      </div>

      <h3 className="my-8 text-xl">Min Height</h3>
      <div className="h-48 bg-red-200">
        <div className="h-24 min-h-full bg-red-600">Tailwind is awesome</div>
      </div>

      <h3 className="my-8 text-xl">Max Height</h3>
      <div className="h-24 bg-orange-200">
        <div className="h-48 max-h-full bg-orange-500">Tailwind is awesome</div>
      </div>

      <h3 className="my-8 text-xl">Full screen height </h3>
      <div className="h-screen bg-blue-300">Hello</div>
    </div>
  </section>
);

export default Sizing;
