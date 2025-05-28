import {
  Code,
  GraduationCap,
  Briefcase,
  Rocket,
  Coffee,
} from "lucide-react";

interface ProfileTargetProps {
  title: string;
  description: string;
  profiles: {
    developers: {
      title: string;
      question: string;
      action: string;
    };
    students: {
      title: string;
      question: string;
      action: string;
    };
    freelancers: {
      title: string;
      question: string;
      action: string;
    };
    entrepreneurs: {
      title: string;
      question: string;
      action: string;
    };
    curious: {
      title: string;
      question: string;
      action: string;
    };
  };
}

export const ProfileTarget = ({
  title,
  description,
  profiles,
}: ProfileTargetProps) => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto max-w-7xl border-2 border-amber-300 rounded-2xl p-16">
        <h2 className="text-4xl font-bold text-center mb-6">
          {title}
        </h2>
        <p className="text-xl text-center max-w-3xl mx-auto mb-8">
          {description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Carte 1 */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-6 rounded-full bg-primary-light flex items-center justify-center">
              <Code className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">
              {profiles.developers.title}
            </h3>
            <p className="text-gray-600 text-center mb-2">
              {profiles.developers.question}
            </p>
            <p className="font-medium text-gray-800 text-center">
              {profiles.developers.action}
            </p>
          </div>

          {/* Carte 2 */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-6 rounded-full bg-primary-light flex items-center justify-center">
              <GraduationCap className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">
              {profiles.students.title}
            </h3>
            <p className="text-gray-600 text-center mb-2">
              {profiles.students.question}
            </p>
            <p className="font-medium text-gray-800 text-center">
              {profiles.students.action}
            </p>
          </div>

          {/* Carte 3 */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-6 rounded-full bg-primary-light flex items-center justify-center">
              <Briefcase className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">
              {profiles.freelancers.title}
            </h3>
            <p className="text-gray-600 text-center mb-2">
              {profiles.freelancers.question}
            </p>
            <p className="font-medium text-gray-800 text-center">
              {profiles.freelancers.action}
            </p>
          </div>

          {/* Carte 4 */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-6 rounded-full bg-primary-light flex items-center justify-center">
              <Rocket className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">
              {profiles.entrepreneurs.title}
            </h3>
            <p className="text-gray-600 text-center mb-2">
              {profiles.entrepreneurs.question}
            </p>
            <p className="font-medium text-gray-800 text-center">
              {profiles.entrepreneurs.action}
            </p>
          </div>

          {/* Carte 5 */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-6 rounded-full bg-primary-light flex items-center justify-center">
              <Coffee className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">
              {profiles.curious.title}
            </h3>
            <p className="text-gray-600 text-center mb-2">
              {profiles.curious.question}
            </p>
            <p className="font-medium text-gray-800 text-center">
              {profiles.curious.action}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
