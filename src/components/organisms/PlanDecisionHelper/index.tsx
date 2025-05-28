interface PlanDecisionHelperProps {
  title: string;
  options: {
    title: string;
    description: string;
  }[];
}

export const PlanDecisionHelper = ({
  title,
  options,
}: PlanDecisionHelperProps) => {
  return (
    <div className="mb-16 max-w-3xl mx-auto p-8 bg-gray-50 rounded-xl">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="space-y-4">
        <li className="flex items-start">
          <div className="bg-primary-light text-primary rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
            1
          </div>
          <div>
            <p className="font-medium">
              {options[0].title}
            </p>
            <p className="text-gray-600">
              {options[0].description}
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="bg-primary-light text-primary rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
            2
          </div>
          <div>
            <p className="font-medium">
              {options[1].title}
            </p>
            <p className="text-gray-600">
              {options[1].description}
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="bg-primary-light text-primary rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
            3
          </div>
          <div>
            <p className="font-medium">
              {options[2].title}
            </p>
            <p className="text-gray-600">
              {options[2].description}
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="bg-primary-light text-primary rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
            4
          </div>
          <div>
            <p className="font-medium">
              {options[3].title}
            </p>
            <p className="text-gray-600">
              {options[3].description}
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};
