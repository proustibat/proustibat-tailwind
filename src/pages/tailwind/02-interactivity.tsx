import TailWindLayout from '@/components/tailwind/layouts/layout-fundamentals';
import { ReactNode } from 'react';

const InteractivityPage = () => (
  <main>
    <a href="#item">Scroll To Item</a>

    <section className="text-center md:grid md:grid-cols-3">
      <div>
        <h1 className="p-10 text-2xl">Hover State Styling</h1>
        <button
          type="button"
          className="m-3 rounded-lg bg-black py-3 px-5 text-white hover:bg-orange-500 hover:text-black"
        >
          Submit
        </button>
      </div>

      <div>
        <h1 className="p-10 text-2xl">Focus State Styling</h1>
        <button
          type="button"
          className="m-3 rounded-lg bg-black py-3 px-5 text-white focus:bg-green-500 focus:text-black"
        >
          Submit
        </button>
      </div>
      <div>
        <h1 className="p-10 text-2xl">Active State Styling</h1>
        <button
          type="button"
          className="m-3 rounded-lg bg-black py-3 px-5 text-white active:bg-yellow-500 active:text-black"
        >
          Submit
        </button>
      </div>
    </section>

    <h1 className="p-10 text-2xl">Styling based on parent state</h1>

    <p className="mx-auto mb-10 px-10">
      When you need to style an element based on the state of some parent
      element, mark the parent with the group class, and use group-* modifiers
      like group-hover to style the target element:{' '}
    </p>
    <a
      href="#"
      className="group mx-auto block max-w-xs space-y-3 rounded-lg bg-white p-6 shadow-lg hover:bg-sky-500"
    >
      <div className="flex items-center">
        <h3 className="group-hover:text-white">Card Title</h3>
      </div>
      <p className="group-hover:text-white">This is some card text</p>
    </a>

    <h1 className="p-10 text-2xl">Pseudo Classes</h1>
    <ul>
      <li className="odd:bg-blue-200 even:bg-green-200">Item 1</li>
      <li className="odd:bg-blue-200 even:bg-green-200">Item 2</li>
      <li className="odd:bg-blue-200 even:bg-green-200">Item 3</li>
      <li className="odd:bg-blue-200 even:bg-green-200">Item 4</li>
      <li className="odd:bg-blue-200 even:bg-green-200">Item 5</li>
      <li className="odd:bg-blue-200 even:bg-green-200">Item 6</li>
      <li className="odd:bg-blue-200 even:bg-green-200">Item 7</li>
      <li className="odd:bg-blue-200 even:bg-green-200">Item 8</li>
      <li className="odd:bg-blue-200 even:bg-green-200">Item 9</li>
      <li className="odd:bg-blue-200 even:bg-green-200">Item 10</li>
    </ul>

    <h1 className="p-10 text-2xl">Appearance</h1>
    <div className="mx-auto mx-10">
      <p>
        Use appearance-none to reset any browser specific styling on an element.
        This utility is often used when creating custom form components.
      </p>
      <select>
        <option>Yes</option>
        <option>No</option>
      </select>
      <br />
      <select className="appearance-none">
        <option>Yes</option>
        <option>No</option>
      </select>
    </div>

    <h1 className="p-10 text-2xl">Cursor</h1>
    <button
      type="button"
      className="m-3 cursor-pointer rounded-lg bg-black py-3 px-5 text-white"
    >
      Submit
    </button>
    <button
      type="button"
      className="m-3 cursor-progress rounded-lg bg-black py-3 px-5 text-yellow-500"
    >
      Loading...
    </button>
    <button
      type="button"
      disabled
      className="m-3 cursor-not-allowed rounded-lg bg-black py-3 px-5 text-red-200"
    >
      Confirm
    </button>

    <h1 className="p-10 text-2xl">Resize</h1>
    <textarea className="resize rounded border border-black"></textarea>

    <h1 className="p-10 text-2xl">User Select</h1>
    <div className="mx-auto mx-10">
      <div className="select-none">Lorem ipsum dolor sit amet.</div>
      <div className="select-text">Lorem ipsum dolor sit amet.</div>
      <div className="select-all">Lorem ipsum dolor sit amet.</div>
      <div className="select-auto">Lorem ipsum dolor sit amet.</div>
    </div>

    <h1 className="p-10 text-2xl">Item below the text</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
      adipisci mollitia odio aspernatur, expedita repellendus nisi aut, dolorem
      corporis ipsam dolor sed ducimus atque tenetur officiis saepe in quaerat
      enim doloremque alias iure! Nemo, quos veniam accusamus quae quisquam
      tempora fugit. Debitis repellendus totam ex? Et voluptatum sunt maxime
      cupiditate! Vero earum perferendis esse temporibus amet nesciunt
      distinctio aliquid voluptates sequi? Hic iste tempora accusamus,
      architecto animi reiciendis fugit rerum dolorum quisquam pariatur sint nam
      eligendi placeat magni harum non nihil quas voluptatibus. Exercitationem
      quae natus perspiciatis vitae, dolorum modi libero commodi quam
      voluptatibus minus eaque, numquam dolor itaque, fuga tempora nobis!
      Similique aut consequatur vitae, inventore repellendus ad possimus natus
      distinctio ratione nam consequuntur unde id ipsum, maxime eius dicta odit?
      Repellendus accusantium dolorem facilis distinctio quos? Cupiditate sed
      totam harum? Quaerat autem assumenda optio, doloremque aperiam molestias
      ullam eveniet, quod temporibus rerum eligendi iste distinctio fuga,
      praesentium asperiores consequuntur debitis hic! Corrupti sapiente ipsum
      quas libero! Error voluptates ad molestias dolorem doloremque omnis quasi
      asperiores delectus voluptatem ullam? Adipisci sequi natus distinctio,
      totam enim doloribus cupiditate eum delectus inventore obcaecati
      aspernatur quod itaque dolor. Nesciunt, soluta voluptatem optio suscipit
      consectetur ipsam enim voluptate corrupti quaerat. Quis minima itaque
      doloribus quod eveniet reprehenderit error facilis. Facere quos, eos
      reiciendis quae, perspiciatis in fugiat dolore recusandae laudantium,
      aliquid atque consequuntur? Laborum quo, perspiciatis odit excepturi
      ratione in quam iste consequuntur facere, sunt voluptas corrupti hic
      dolorum debitis! Voluptates aut rem fuga beatae explicabo velit maiores
    </p>

    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
      adipisci mollitia odio aspernatur, expedita repellendus nisi aut, dolorem
      corporis ipsam dolor sed ducimus atque tenetur officiis saepe in quaerat
      enim doloremque alias iure! Nemo, quos veniam accusamus quae quisquam
      tempora fugit. Debitis repellendus totam ex? Et voluptatum sunt maxime
      cupiditate! Vero earum perferendis esse temporibus amet nesciunt
      distinctio aliquid voluptates sequi? Hic iste tempora accusamus,
      architecto animi reiciendis fugit rerum dolorum quisquam pariatur sint nam
      eligendi placeat magni harum non nihil quas voluptatibus. Exercitationem
      quae natus perspiciatis vitae, dolorum modi libero commodi quam
      voluptatibus minus eaque, numquam dolor itaque, fuga tempora nobis!
      Similique aut consequatur vitae, inventore repellendus ad possimus natus
      distinctio ratione nam consequuntur unde id ipsum, maxime eius dicta odit?
      Repellendus accusantium dolorem facilis distinctio quos? Cupiditate sed
      totam harum? Quaerat autem assumenda optio, doloremque aperiam molestias
      ullam eveniet, quod temporibus rerum eligendi iste distinctio fuga,
      praesentium asperiores consequuntur debitis hic! Corrupti sapiente ipsum
      quas libero! Error voluptates ad molestias dolorem doloremque omnis quasi
      asperiores delectus voluptatem ullam? Adipisci sequi natus distinctio,
      totam enim doloribus cupiditate eum delectus inventore obcaecati
      aspernatur quod itaque dolor. Nesciunt, soluta voluptatem optio suscipit
      consectetur ipsam enim voluptate corrupti quaerat. Quis minima itaque
      doloribus quod eveniet reprehenderit error facilis. Facere quos, eos
      reiciendis quae, perspiciatis in fugiat dolore recusandae laudantium,
      aliquid atque consequuntur? Laborum quo, perspiciatis odit excepturi
      ratione in quam iste consequuntur facere, sunt voluptas corrupti hic
      dolorum debitis! Voluptates aut rem fuga beatae explicabo velit maiores
    </p>

    <h1 id="item" className="p-10 text-2xl">
      ITEM
    </h1>
  </main>
);

export default InteractivityPage;

InteractivityPage.getLayout = (page: ReactNode) => (
  <TailWindLayout>{page}</TailWindLayout>
);
