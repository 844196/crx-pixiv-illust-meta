type NumberProps = {
  children: number;
};

export function Number({ children }: NumberProps) {
  return (
    <>
      {children.toLocaleString()}
    </>
  );
}
