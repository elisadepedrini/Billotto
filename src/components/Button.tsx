import type { ReactNode } from "react"

type ButtonProps = {
    variant?: "primary" | "secondary";
    children: ReactNode;
    onClick: () => void; 
}

export default function Button ({
    variant = "primary",
    children,
    onClick
}: ButtonProps) {

    const className = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

    return (
        <button
            type="button"
            className={className}
            onClick={onClick}
        >
            {children}
        </button>
    )
}