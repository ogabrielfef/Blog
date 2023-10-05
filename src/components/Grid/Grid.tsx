type GridProps = {
  children: React.ReactNode;
  cols?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
  gap?: number;
};

export const Grid = ({
  children,
  cols = 1,
  gap = 8,
  lg,
  md,
  sm,
  xl,
  xxl
}: GridProps) => {
  const small = sm ? `sm:grid-cols-${sm}` : '';
  const medium = md ? `md:grid-cols-${md}` : '';
  const large = lg ? `lg:grid-cols-${lg}` : '';
  const extraLarge = xl ? `xl:grid-cols-${xl}` : '';
  const extraExtraLarge = xxl ? `xxl:grid-cols-${xxl}` : '';
  const gapSize = gap ? `gap-${gap}` : '';

  const responsive = `${small} ${medium} ${large} ${extraLarge} ${extraExtraLarge} ${gapSize}`;

  return (
    <>
      <div className={`grid w-full grid-cols-${cols} ${responsive}`}>
        {children}
      </div>
    </>
  );
};
