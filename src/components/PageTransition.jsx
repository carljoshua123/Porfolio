export default function PageTransition({ children, keyName }) {
  return (
    <div
      key={keyName}
      className="animate-[fadeIn_0.35s_ease-out]"
      style={{
        animationFillMode: 'both',
      }}
    >
      {children}
    </div>
  );
}
