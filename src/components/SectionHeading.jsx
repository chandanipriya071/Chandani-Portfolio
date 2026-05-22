import SectionTitle from './SectionTitle';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  theme = 'about',
  highlightWords = [],
}) {
  return (
    <SectionTitle
      eyebrow={eyebrow}
      title={title}
      description={description}
      theme={theme}
      highlightWords={highlightWords}
    />
  );
}