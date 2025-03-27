'use client';

import { useEffect, useState } from 'react';
import { getVisitorCount } from '../lib/visitors';

export default function Footer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        getVisitorCount().then(setCount);
    }, []);
    return (
        <footer className="bg-gray-800 text-white p-4 text-center">
            {count > 0 ? (
                <p className="text-sm md:text-base">Visitors: {count.toLocaleString()}</p>
            ) : (
                <p className="text-sm md:text-base text-gray-400">Loading visitor count...</p>
            )}
        </footer>
    );
}