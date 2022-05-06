type NumberProps = Omit<JSX.IntrinsicElements['span'], 'children'> & {
  children: number;
};

export function Number({ children, ...props }: NumberProps) {
  return <span {...props}>{children.toLocaleString()}</span>;
}
