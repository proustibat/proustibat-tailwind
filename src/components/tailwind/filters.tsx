const Filters = () => (
  <section className="p-10">
    <h1 className="my-8 text-2xl">Filters</h1>

    <h2 className="my-8 text-xl">Blur</h2>
    <div className="my-8 md:grid md:grid-cols-4">
      <div className="blur-none">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
        deserunt animi quas aliquam consectetur ut obcaecati voluptas
        repudiandae odit harum?
      </div>
      <div className="blur-sm">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
        deserunt animi quas aliquam consectetur ut obcaecati voluptas
        repudiandae odit harum?
      </div>
      <div className="blur-lg">
        <img className="w-48" src="/images/tailwind/img1.jpg" alt="" />
      </div>
      <div className="blur-2xl">
        <img className="w-48" src="/images/tailwind/img1.jpg" alt="" />
      </div>
    </div>

    <h2 className="my-8 text-xl">Brightness</h2>
    <div className="my-8 md:grid md:grid-cols-4">
      <div className="brightness-50">
        <img className="w-48" src="/images/tailwind/img2.jpg" alt="" />
      </div>
      <div className="brightness-100">
        <img className="w-48" src="/images/tailwind/img2.jpg" alt="" />
      </div>
      <div className="brightness-150">
        <img className="w-48" src="/images/tailwind/img2.jpg" alt="" />
      </div>
      <div className="brightness-200">
        <img className="w-48" src="/images/tailwind/img2.jpg" alt="" />
      </div>
    </div>

    <h2 className="my-8 text-xl">Contrast</h2>
    <div className="my-8 md:grid md:grid-cols-4">
      <div className="contrast-50">
        <img className="w-48" src="/images/tailwind/img2.jpg" alt="" />
      </div>
      <div className="contrast-100">
        <img className="w-48" src="/images/tailwind/img2.jpg" alt="" />
      </div>
      <div className="contrast-150">
        <img className="w-48" src="/images/tailwind/img2.jpg" alt="" />
      </div>
      <div className="contrast-200">
        <img className="w-48" src="/images/tailwind/img2.jpg" alt="" />
      </div>
    </div>

    <h2 className="my-8 text-xl">Grayscale, invert, sepia</h2>
    <div className="my-8 md:grid md:grid-cols-3">
      <div className="grayscale">
        <img className="w-48" src="/images/tailwind/img3.jpg" alt="" />
      </div>

      <div className="invert">
        <img className="w-48" src="/images/tailwind/img3.jpg" alt="" />
      </div>

      <div className="sepia">
        <img className="w-48" src="/images/tailwind/img3.jpg" alt="" />
      </div>
    </div>

    <h2 className="my-8 text-xl">Hue rotate</h2>

    <div className="my-8 md:grid md:grid-cols-4">
      <div className="hue-rotate-15">
        <img className="w-48" src="/images/tailwind/img3.jpg" alt="" />
      </div>
      <div className="hue-rotate-90">
        <img className="w-48" src="/images/tailwind/img3.jpg" alt="" />
      </div>
      <div className="hue-rotate-180">
        <img className="w-48" src="/images/tailwind/img3.jpg" alt="" />
      </div>
      <div className="hue-rotate-60">
        <img className="w-48" src="/images/tailwind/img3.jpg" alt="" />
      </div>
    </div>

    <h2 className="my-8 text-xl">Saturation</h2>
    <div className="my-8 md:grid md:grid-cols-4">
      <div className="saturate-50">
        <img className="w-48" src="/images/tailwind/img4.jpg" alt="" />
      </div>
      <div className="saturate-100">
        <img className="w-48" src="/images/tailwind/img4.jpg" alt="" />
      </div>
      <div className="saturate-150">
        <img className="w-48" src="/images/tailwind/img4.jpg" alt="" />
      </div>
      <div className="saturate-200">
        <img className="w-48" src="/images/tailwind/img4.jpg" alt="" />
      </div>
    </div>
  </section>
);
export default Filters;
