interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  large?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  className = "",
  large = false,
}: ButtonProps) {
  const baseClasses = `inline-block border border-honey text-honey font-mono rounded hover:bg-honey-subtle transition-colors ${
    large ? "px-8 py-4 text-base" : "px-6 py-3 text-sm"
  } ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}
