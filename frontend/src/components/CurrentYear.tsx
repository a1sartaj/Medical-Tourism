"use client";

import { useEffect, useState } from "react";

export default function CurrentYear() {
    const [year, setYear] = useState<number | string>("2026");

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return <>{year}</>;
}