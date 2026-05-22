import DynamicGradientText from './DynamicGradientText';

export default function SplitGradientText({
  left,
  right,
  leftTheme = 'hero',
  rightTheme = 'projects',
  className = '',
}) {
  return (
    <span className={className}>
      <DynamicGradientText text={left} theme={leftTheme} />{' '}
      <DynamicGradientText text={right} theme={rightTheme} />
    </span>
  );
}
