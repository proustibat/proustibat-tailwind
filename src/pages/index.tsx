import Head from 'next/head';

const Home = () => (
  <>
    <Head>
      <title>Jennifer Proust</title>
      <title>Proustibat&apos;s website</title>
      <meta
        name="description"
        content="Frontend development, react, nextJS, javascript, typescript"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="min-h-screen w-screen bg-black p-10">
      <div className="h-[200px] w-[200px] rounded-xl border-x-8 border-red-900 bg-amber-800"></div>
      <div className="h-[200px] w-[200px] rounded-full border-8 border-white bg-blue-400"></div>
      <div className="h-[200px] w-[200px] bg-emerald-700"></div>
      <input
        type="email"
        placeholder="email@gmail.com"
        className="mr-4 h-fit rounded-lg rounded-lg bg-white/30 p-3 text-lg text-lg text-slate-400 outline-none transition-all duration-200 focus:text-orange-500"
      />
      <button className="h-fit rounded-full border-8 border-orange-500 bg-orange-500 p-3 py-3 px-5 uppercase tracking-[3px] text-white transition-all duration-200 hover:bg-transparent hover:text-orange-500">
        Submit
      </button>

      <div className="flex flex-row flex-wrap space-x-10 ">
        <div className="h-[200px] w-[200px] bg-amber-800"></div>
        <div className="h-[200px] w-[200px] bg-emerald-700"></div>
        <div className="h-[200px] w-[200px] bg-cyan-800"></div>
        <div className="h-[200px] w-[200px] bg-fuchsia-900"></div>
      </div>

      <div className="grid grid-cols-2">
        <div className="h-[200px] w-[200px] bg-amber-800"></div>
        <div className="h-[200px] w-[200px] bg-emerald-700"></div>
        <div className="h-[200px] w-[200px] bg-cyan-800"></div>
        <div className="h-[200px] w-[200px] bg-fuchsia-900"></div>
      </div>
    </div>
  </>
);

export default Home;
