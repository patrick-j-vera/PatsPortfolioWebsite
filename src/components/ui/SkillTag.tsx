interface SkillTagProps {
  children: React.ReactNode;
}

export default function SkillTag({ children }: SkillTagProps) {
  return (
    <span className="inline-block bg-honey-subtle text-bark-light text-sm font-mono px-3 py-1 rounded-full">
      {children}
    </span>
  );
}
