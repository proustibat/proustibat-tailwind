export type ResumeIntroProps = {
  fullName: string;
  email: string;
  phone: string;
  presentation: string;
  job: string;
  links: {
    text: string;
    url: string;
  }[];
};

const ResumeIntro = ({ fullName, presentation, job }: ResumeIntroProps) => (
  <>
    <div className="md:flex md:flex-row md:items-center md:justify-evenly">
      <div>
        <h1 className="text-4xl font-normal">{fullName}</h1>
        <h2 className="my-3 text-3xl font-thin">{job}</h2>
        <p>{presentation}</p>
      </div>
      <img
        className="hidden rounded-full md:block md:h-40 md:w-40 lg:h-56 lg:w-56 xl:h-64 xl:w-64"
        src="/images/jennifer-proust.jpeg"
        alt="Jennifer Proust Avatar"
      />
    </div>
  </>
);

export default ResumeIntro;
