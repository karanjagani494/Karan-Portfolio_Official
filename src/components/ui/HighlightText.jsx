const keyPhrases = /(BEng \(Hons\) Computer Science|BEng \(Hons\)|First Class Honours|Anglia Ruskin University|Computer Science)/g;

export const HighlightText = ({ children }) => children.split(keyPhrases).map((part, index) => (
    index % 2 === 1 ? <span key={index} className="flow-underline key-phrase">{part}</span> : part
));
