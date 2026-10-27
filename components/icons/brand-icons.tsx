// components/icons/brand-icons.tsx
import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & {
    size?: number | string;
};

export function Github({ size = 24, ...props }: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            {...props}
        >
            <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.2 3.44 9.6 8.2 11.16.6.11.82-.25.82-.56v-2.1c-3.34.72-4.04-1.42-4.04-1.42-.54-1.36-1.32-1.72-1.32-1.72-1.08-.73.08-.72.08-.72 1.2.08 1.84 1.22 1.84 1.22 1.06 1.8 2.78 1.28 3.46.98.11-.76.42-1.28.76-1.58-2.66-.3-5.46-1.32-5.46-5.88 0-1.3.47-2.36 1.24-3.2-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.28 1.22a11.5 11.5 0 0 1 5.98 0c2.28-1.54 3.28-1.22 3.28-1.22.66 1.66.25 2.88.12 3.18.77.84 1.24 1.9 1.24 3.2 0 4.56-2.8 5.58-5.47 5.87.43.37.81 1.1.81 2.22v3.29c0 .31.22.67.82.56A12.02 12.02 0 0 0 24 12.29C24 5.78 18.63.5 12 .5Z" />
        </svg>
    );
}

export function Linkedin({ size = 24, ...props }: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            {...props}
        >
            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
        </svg>
    );
}
