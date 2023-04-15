type SectionProps = {
  title: string;
  id?: string;
  children: React.ReactNode;
};

const Section = ({ title, id, children }: SectionProps) => {
  return (
    <section className="pt-10 overflow-x-hidden" id={id}>
      <h2 className="w-fit mx-auto pr-2 text-center font-bignoodletitling text-5xl text-catx-yellow italic border-2 border-catx-yellow border-l-0 border-r-0 select-none">{title}</h2>
      <div className="mt-5 pb-20 p-5 font-raleway text-catx-white">{children}</div>
    </section>
  );
};

export default Section;
