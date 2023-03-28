const ContainerSpacing = () => (
  <section className="p-10">
    <h1 className="my-8 text-2xl">Container spacing</h1>
    <div className="container mx-auto">
      <article className="bg-slate-300">
        <h3>Article One</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem laboriosam libero molestiae recusandae accusantium
          voluptates? Expedita dignissimos amet eveniet dolore nobis odio a
          sunt, maiores quasi. Modi amet quos dolores!
        </p>
      </article>

      <h3 className="my-4">Margin</h3>
      <div className="m-4 bg-slate-100">m-4</div>
      <div className="mx-4 bg-slate-200">mx-4</div>
      <div className="my-4 bg-slate-300">my-4</div>
      <div className="mt-6 bg-slate-400">mt-6</div>
      <div className="mr-4 bg-slate-500">mr-4</div>
      <div className="mb-8 bg-slate-600">mb-8</div>
      <div className="ml-2 bg-slate-700">ml-2</div>

      <div className="ml-[200px] bg-slate-700">ml-[200px]</div>

      <h3 className="my-4">Padding</h3>
      <div className="bg-slate-100 p-4">p-4</div>
      <div className="bg-slate-200 px-4">px-4</div>
      <div className="bg-slate-300 py-4">py-4</div>
      <div className="bg-slate-400 pt-6">pt-6</div>
      <div className="bg-slate-500 pr-4">pr-4</div>
      <div className="bg-slate-600 pb-8">pb-8</div>
      <div className="bg-slate-700 pl-2">pl-2</div>

      <h3 className="my-4">Space Between X</h3>
      <div className="flex space-x-4">
        <div className="bg-red-100 p-3">01</div>
        <div className="bg-red-100 p-3">02</div>
        <div className="bg-red-100 p-3">03</div>
      </div>

      <h3 className="my-4">Space Between Y</h3>
      <div className="flex flex-col space-y-4">
        <div className="bg-red-100 p-3">01</div>
        <div className="bg-red-100 p-3">02</div>
        <div className="bg-red-100 p-3">03</div>
      </div>
    </div>
  </section>
);

export default ContainerSpacing;
