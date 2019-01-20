export default function getRandomColor() {
    const colors = [
        '#495057',
        '#f03e3e',
        '#d6336c',
        '#ae3ec9'
    ];

    const random = Math.floor(Math.random() * 13);

    return colors[random];
}