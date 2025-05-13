interface DividerLineProps {
  direction?: "horizontal" | "vertical";
  length?: string;
}

function DividerLine({ direction = "horizontal", length }: DividerLineProps) {
  const baseClass = "border-accent1/20 border";
  const orientationClass =
    direction === "vertical"
      ? `${length || "h-24"} border-l mx-4`
      : `${length || "w-full"} border-t my-4`;
  return <div className={`${baseClass} ${orientationClass}`}></div>;
}

export default DividerLine;
