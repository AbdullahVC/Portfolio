export default function SectionHeading({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-16 w-full">
      <span className="font-mono text-lg text-primary font-medium whitespace-nowrap">{num}</span>
      <span className="font-sans text-2xl md:text-3xl font-semibold text-slate-100 whitespace-nowrap tracking-tight">
        {title}
      </span>
      <span className="section-heading-line" />
    </div>
  );
}
