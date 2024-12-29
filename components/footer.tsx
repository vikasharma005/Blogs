'use client';

import { Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/ieee.piet',
    icon: Instagram,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/ieee-cis-piet1/',
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    href: 'https://x.com/ieee_cis_piet',
    icon: Twitter,
  },
];

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">About IEEE CIS PIET</h3>
            <p className="text-sm text-muted-foreground">
              Empowering students through technical knowledge sharing and
              innovation at Poornima Institute of Engineering & Technology.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{link.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="text-sm text-muted-foreground not-italic">
              IEEE CIS PIET
              <br />
              Poornima Institute of Engineering & Technology
              <br />
              Jaipur, Rajasthan
            </address>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            Designed and developed by{' '}
            <a
              href="https://www.linkedin.com/in/vikas-sharma005/"
              target="_blank"
            >
              Vikas Sharma
            </a>
          </p>
          <p>
            &copy; {new Date().getFullYear()} IEEE CIS PIET. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
