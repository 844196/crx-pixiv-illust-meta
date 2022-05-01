export type RowProps = JSX.IntrinsicElements['span'];

export function Row({ children, ...props }: RowProps) {
  return (
    <span style={{ display: 'inline-flex', gap: '.5em', alignItems: 'center' }} {...props}>
      {children}
    </span>
  );
}
