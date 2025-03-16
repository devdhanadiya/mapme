export default function CTA() {
  return (
    <section className="border-t">
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Ready to take control of your tasks?
        </h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Join a growing community of productive individuals who rely on{" "}
          <span className="text-white font-semibold">MapMe</span> to stay organized and focused
          every day.
        </p>
      </div>
    </section>
  );
}
