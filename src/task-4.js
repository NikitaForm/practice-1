
export default function formatTime(seconds) {
    function twoDigit(n) {
        if (n.toString().length === 1) {
            n = `0${n}`;
        }
        return n;
    }
    const sec = seconds % 60;
    const min = Math.floor((seconds % 3600) / 60);
    const hour = Math.floor((seconds / 3600) % 12) || 12;
    const ampm = Math.floor(seconds / (3600 * 12)) ? "PM" : "AM";
    return `${twoDigit(hour)}:${twoDigit(min)}:${twoDigit(sec)} ${ampm}`;
}
