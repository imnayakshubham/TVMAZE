import { useEffect, useState } from "react";

export function useDebounce(value, delay = 300) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        let sub = true

        const handler = setTimeout(() => {
            sub && setDebouncedValue(value);
        }, delay);

        return () => {
            sub = false
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}