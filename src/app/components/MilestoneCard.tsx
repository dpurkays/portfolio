interface MilestoneCardProps {
  title: string;
  subtitle?: string;
  date?: string;
  description?: string;
}

export default function MilestoneCard({
  title,
  subtitle,
  date,
  description,
}: MilestoneCardProps) {
  return (
    <div
      className={`rounded-lg border p-6 hover:-translate-y-1 transform transition duration-200`}
    >
      <h3 className="font-medium text-lg">{title}</h3>
      {subtitle && <p className="text-sm text-muted">{subtitle}</p>}
      {date && <p className="text-sm">{date}</p>}
      {description && <p className="text-sm mt-2">{description}</p>}
    </div>
  );
}
