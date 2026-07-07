type SectionProps = {
  title: string;
  id?: string;
  children: React.ReactNode;
};

const Section = ({ title, id, children }: SectionProps) => {
  return (
    <section className="pt-10 overflow-x-hidden" id={id}>
      <h2 className={"w-fit mx-auto text-center font-bignoodletitling text-5xl text-catx-yellow italic select-none before:content-[''] before:block before:mr-auto before:mb-[0.15em] before:ml-[45%] before:h-[3px] before:w-[65%] before:bg-catx-yellow after:content-[''] after:block after:mt-[0.15em] after:mr-[50%] after:ml-auto after:h-[3px] after:w-[65%] after:bg-catx-yellow"}>{title}</h2>
      <div className="mt-5 pb-20 p-5 font-raleway text-catx-white">{children}</div>
    </section>
  );
};

export default Section;
