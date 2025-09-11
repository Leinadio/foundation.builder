export interface Stats8Props {
  heading?: string;
  description?: string;
  stats?: Array<{
    id: string;
    value: string;
    label: string;
  }>;
}

const Stats8 = ({
  heading = "Platform performance insights",
  description = "Ensuring stability and scalability for all users",
  stats = [],
}: Stats8Props) => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold md:text-4xl">{heading}</h2>
          <p>{description}</p>
        </div>
        <div className="mt-14 grid gap-x-5 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col gap-5">
              <div className="text-6xl font-bold">{stat.value}</div>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Stats8 };
