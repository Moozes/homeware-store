export function getFontCSS(fontFamily: "'Clash Display', sans-serif" | "'Satoshi', sans-serif", fontWeight: number, fontSize: number, lineHeight: number) {
    return {
        fontFamily,
        fontWeight,
        fontSize: fontSize+"px",
        lineHeight: lineHeight+"px"
    }
}

// generate media query string
export function mq(maxWidth: number) {
    return `@media (max-width: ${maxWidth}px)`
}