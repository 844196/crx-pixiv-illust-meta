export type ColumnProps = JSX.IntrinsicElements['span'];

export function Column({ children, ...props }: ColumnProps) {
  return (
    <span style={{ display: 'inline-flex', gap: '.25em', alignItems: 'center' }} {...props}>
      {children}
    </span>
  );
}
