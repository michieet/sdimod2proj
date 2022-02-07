export default function colorIcon(param) {
    let lots = param.AvailableLots;
    let red = "🔴";
    let yellow = "🟡";
    let green = "🟢";
        if (lots < 10) {
            return red
        } else if (lots < 50) {
            return yellow
        } else {
            return green 
        } 
};