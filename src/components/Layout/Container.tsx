export type ContainerProps = JSX.IntrinsicElements['span'];

export function Container({ children, ...props }: ContainerProps) {
  return (
    <span
      style={{
        display: 'flex',
        flexDirection: 'column',
        fontSize: '13px',
        color: '#858585',
      }}
      {...props}
    >
      {children}
    </span>
  );
}
