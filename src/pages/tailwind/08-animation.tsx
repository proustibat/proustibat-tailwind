import TailWindLayout from '@/components/tailwind/layouts/layout-fundamentals';
import { ChangeEvent, ReactNode, useState } from 'react';

enum ANIMATION {
  PULSE = 'animate-pulse',
  BOUNCE = 'animate-bounce',
  SPIN = 'animate-spin',
  PING = 'animate-ping',
  WIGGLE = 'animate-wiggle',
}
const AnimationPage = () => {
  const [animation, setAnimation] = useState(ANIMATION.BOUNCE);

  const handleAnimationChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setAnimation(event.target.value as ANIMATION);
  };
  return (
    <main className="p10">
      <h1 className="mt-10 px-10 text-2xl">Animation</h1>

      <div className="mx-auto p-10">
        <label htmlFor="animation">Choose an animation:</label>

        <select
          name="animation"
          id="animation"
          onChange={handleAnimationChange}
        >
          <option
            key={ANIMATION.PING}
            value={ANIMATION.PING}
            selected={animation === ANIMATION.PING}
          >
            {ANIMATION.PING}
          </option>
          <option
            key={ANIMATION.PULSE}
            value={ANIMATION.PULSE}
            selected={animation === ANIMATION.PULSE}
          >
            {ANIMATION.PULSE}
          </option>
          <option
            key={ANIMATION.SPIN}
            value={ANIMATION.SPIN}
            selected={animation === ANIMATION.SPIN}
          >
            {ANIMATION.SPIN}
          </option>
          <option
            key={ANIMATION.BOUNCE}
            value={ANIMATION.BOUNCE}
            selected={animation === ANIMATION.BOUNCE}
          >
            {ANIMATION.BOUNCE}
          </option>

          <option
            key={ANIMATION.WIGGLE}
            value={ANIMATION.WIGGLE}
            selected={animation === ANIMATION.WIGGLE}
          >
            {ANIMATION.WIGGLE} (custom in config)
          </option>
        </select>
        <div className="flex h-96 items-center justify-center bg-slate-900">
          <svg
            className={`w-48 ${animation} text-white`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      </div>
    </main>
  );
};

export default AnimationPage;
AnimationPage.getLayout = (page: ReactNode) => (
  <TailWindLayout>{page}</TailWindLayout>
);
