import Image from 'next/image'

export default function Header() {
    return (
        <header className="p-4">
            <a
                href="https://www.wus.de"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src="/ws-logo.svg"
                    alt="W&S Logo"
                    width={100}
                    height={50}
                    className="h-12 w-auto"
                />
            </a>
        </header>
)
}