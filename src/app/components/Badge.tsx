interface BadgeProps {
  src: string;
  alt: string;
  link?: string;
}

function Badge({ src, alt, link }: BadgeProps) {
  const badgeImage = (
    <img
      src={src}
      alt={alt}
      className="transition-transform duration-300 hover:scale-105 hover:brightness-110"
    />
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {badgeImage}
    </a>
  ) : (
    badgeImage
  );
}

export default Badge;
