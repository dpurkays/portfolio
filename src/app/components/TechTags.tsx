function TechTags({ stack }: { stack: string[] }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {stack.map((tech) => (
        <span
          key={tech}
          className="bg-accent1/10 text-accent1 text-xs font-semibold px-3 py-1 rounded-md"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

export default TechTags;
