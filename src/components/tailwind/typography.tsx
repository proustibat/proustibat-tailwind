const Typography = () => (
  <section className="p-10">
    <h1 className="my-8 text-2xl">Typography</h1>
    <div className="flex flex-col md:grid md:grid-cols-2 md:gap-5">
      <div className="border-2">
        <h3 className="my-8 text-xl">Font family</h3>
        <p className="font-sans">Tailwind is awesome</p>
        <p className="font-serif">Tailwind is awesome</p>
        <p className="font-mono">Tailwind is awesome</p>
      </div>

      <div className="overflow-hidden border-2">
        <h3 className="my-8 text-xl">Font size</h3>
        <p className="text-xs">Tailwind is awesome</p>
        <p className="text-sm">Tailwind is awesome</p>
        <p className="text-base">Tailwind is awesome</p>
        <p className="text-lg">Tailwind is awesome</p>
        <p className="text-xl">Tailwind is awesome</p>
        <p className="text-2xl">Tailwind is awesome</p>
        <p className="text-3xl">Tailwind is awesome</p>
        <p className="text-4xl">Tailwind is awesome</p>
        <p className="text-5xl">Tailwind is awesome</p>
        <p className="text-6xl">Tailwind is awesome</p>
        <p className="text-7xl">Tailwind is awesome</p>
        <p className="text-8xl">Tailwind is awesome</p>
        <p className="text-9xl">Tailwind is awesome</p>
      </div>

      <div className="border-2 border-none sm:grid sm:grid-cols-2 md:block">
        <div className="border-2">
          <h3 className="my-8 text-xl">Font weight</h3>
          <p className="font-light">Tailwind is awesome</p>
          <p className="font-normal">Tailwind is awesome</p>
          <p className="font-medium">Tailwind is awesome</p>
          <p className="font-semibold">Tailwind is awesome</p>
          <p className="font-bold">Tailwind is awesome</p>
        </div>

        <div className="border-2">
          <h3 className="my-8 text-xl">Letter spacing</h3>
          <p className="tracking-tight">Tailwind is awesome</p>
          <p className="tracking-normal">Tailwind is awesome</p>
          <p className="tracking-wide">Tailwind is awesome</p>
        </div>
      </div>

      <div className="border-2">
        <h3 className="my-8 text-xl">Text alignment</h3>
        <p className="text-left">Tailwind is awesome</p>
        <p className="text-center">Tailwind is awesome</p>
        <p className="text-right">Tailwind is awesome</p>
      </div>

      <div className="border-2">
        <h3 className="my-8 text-xl">Text decoration</h3>
        <p className="underline decoration-4">Tailwind is awesome</p>
        <p className="line-through">Tailwind is awesome</p>
        <p className="overline">Tailwind is awesome</p>
        <p className="no-underline">Tailwind is awesome</p>
      </div>

      <div className="border-2">
        <h3 className="my-8 text-xl">Decoration style</h3>
        <p className="underline decoration-solid">Tailwind is awesome</p>
        <p className="underline decoration-double">Tailwind is awesome</p>
        <p className="underline decoration-dotted">Tailwind is awesome</p>
        <p className="underline decoration-dashed">Tailwind is awesome</p>
        <p className="underline decoration-wavy">Tailwind is awesome</p>
      </div>

      <div className="border-2">
        <h3 className="my-8 text-xl">Decoration offset</h3>
        <p className="underline underline-offset-1">Tailwind is awesome</p>
        <p className="underline underline-offset-2">Tailwind is awesome</p>
        <p className="underline underline-offset-4">Tailwind is awesome</p>
        <p className="underline underline-offset-8">Tailwind is awesome</p>
      </div>

      <div className="border-2">
        <h3 className="my-8 text-xl">Text transform</h3>
        <p className="normal-case">Tailwind is awesome</p>
        <p className="uppercase">Tailwind is awesome</p>
        <p className="lowercase">Tailwind is awesome</p>
        <p className="capitalize">Tailwind is awesome</p>
      </div>
    </div>
  </section>
);

export default Typography;
