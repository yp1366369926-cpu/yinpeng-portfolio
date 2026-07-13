type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  theme?: 'dark' | 'light';
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, theme = 'dark', align = 'left' }: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${theme} section-heading--${align}`}>
      {eyebrow && <span className="section-heading__eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
    </div>
  );
}
