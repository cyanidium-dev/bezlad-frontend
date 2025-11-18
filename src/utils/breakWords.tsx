export const breakWords = (text: string) => {
    return text.split(" ").map(word => <span key={word}>{word}</span>);
};
