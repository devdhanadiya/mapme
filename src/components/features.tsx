import { CheckSquare, Lock, ListChecks, Store } from "lucide-react";

const features = [
  {
    title: "Task Management",
    description:
      "Easily create, update, and remove tasks to stay organized and keep track of your daily to-dos with a seamless interface.",
    icon: CheckSquare,
  },
  {
    title: "User Authentication",
    description:
      "Sign in securely using your Google account, ensuring a hassle-free and protected login experience with encrypted authentication.",
    icon: Lock,
  },
  {
    title: "Progress Tracking",
    description:
      "Mark tasks as completed to monitor your productivity, visually track progress, and stay motivated with a clear task overview.",
    icon: ListChecks,
  },
  {
    title: "Data Persistence",
    description:
      "Your todos are securely stored in a database, ensuring they are always accessible and preventing accidental data loss across sessions.",
    icon: Store,
  },
];

export default function Features() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Cutting-Edge Solution
        </h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          MapMe makes task management simple and efficient, helping you stay organized and track
          progress effortlessly. With a secure and intuitive interface, you can focus on what
          matters <span className="text-white font-semibold ">—because your Time does</span>.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="relative overflow-hidden rounded-lg border bg-background p-8"
          >
            <div className="flex items-center gap-4">
              <feature.icon className="h-8 w-8" />
              <h3 className="font-bold">{feature.title}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
