type TechSkillChipProps = {
  name: string;
};
const TechSkillChip = ({ name }: TechSkillChipProps) => (
  <span
    data-te-chip-init
    data-te-ripple-init
    className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-neutral-200"
    data-te-close="true"
  >
    {name}
  </span>
);

export default TechSkillChip;
