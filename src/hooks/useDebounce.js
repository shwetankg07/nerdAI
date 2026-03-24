import { useState, useEffect } from 'react'

function useDebounce(value, delay) {
    const [debounced, setDebounced] = useState(value)

    useEffect(function () {
        const timer = setTimeout(function () {
            setDebounced(value)
        }, delay)

        return function () {
            clearTimeout(timer)
        }
    }, [value, delay])

    return debounced
}

export default useDebounce
