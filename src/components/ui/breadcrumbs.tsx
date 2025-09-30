'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { Fragment } from 'react';

export function Breadcrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);

  if (pathSegments.length === 0) {
    return null;
  }

  const breadcrumbItems = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
    const isLast = index === pathSegments.length - 1;
    const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');

    return { href, isLast, label };
  });

  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
        </li>
        {breadcrumbItems.map((item) => (
          <Fragment key={item.href}>
            <li>
              <ChevronRight className="h-4 w-4" />
            </li>
            <li>
              {item.isLast ? (
                <span className="font-medium text-foreground">{item.label}</span>
              ) : (
                <Link href={item.href} className="hover:text-primary">
                  {item.label}
                </Link>
              )}
            </li>
          </Fragment>
        ))}
      </ol>
    </nav>
  );
}
