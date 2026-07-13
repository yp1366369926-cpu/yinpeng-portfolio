import type { ReactNode } from 'react';

type ContactButtonProps = {
  href: string;
  children?: ReactNode;
  variant?: 'primary' | 'outline';
};

export function ContactButton({ href, children = "Let's Talk", variant = 'primary' }: ContactButtonProps) {
  return (
    <a className={`contact-button contact-button--${variant}`} href={href}>
      <span>{children}</span>
      <span className="contact-button__arrow" aria-hidden="true">↗</span>
    </a>
  );
}
