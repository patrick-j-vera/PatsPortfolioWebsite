interface SectionHeadingProps {
  number: string;
  title: string;
}

export default function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-serif font-bold text-bark mb-10 whitespace-nowrap">
      <span className="font-mono text-honey text-lg md:text-xl font-normal">
        {number}.
      </span>
      {title}
      <span className="hidden sm:block h-px bg-sand-border flex-1 ml-4 max-w-xs" />
    </h2>
  );
}
