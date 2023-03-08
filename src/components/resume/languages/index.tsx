export type LanguageType = {
  name: string;
  slug: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
};

type LanguagesProps = {
  list: LanguageType[];
};
const Languages = ({ list }: LanguagesProps) => (
  <section>
    <h3>Languages</h3>
    {list && list.length && (
      <ul>
        {list.map((item) => (
          <li key={item.slug}>
            {item.name} : {item.level}
          </li>
        ))}
      </ul>
    )}
  </section>
);

export default Languages;
