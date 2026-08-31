import { useEffect, useRef, useState } from 'react';

// eslint-disable-next-line no-unused-vars
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay ? `lw-reveal-delay-${delay}` : '';

  return (
    <Tag
      ref={ref}
      className={`lw-reveal ${visible ? 'lw-visible' : ''} ${delayClass} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}