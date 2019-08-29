export function CheckIsColor(bgVal) {
    var type = "^#[0-9a-fA-F]{6}$";
    var re = new RegExp(type);
    if (bgVal.match(re) == null) {
        type = "^[rR][gG][Bb][\(]([\\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\\s]*,){2}[\\s]*(2[0-4]\\d|25[0-5]|[01]?\\d\\d?)[\\s]*[\)]{1}$";
        re = new RegExp(type);
        if (bgVal.match(re) == null) {
            if (bgVal.indexOf("var") ===-1) {
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    } else {
        return true;
    }
}
export function addOpacity(color,percent){
    let number= parseInt(percent*255/100);
    if (color.indexOf("var") === -1) {
        let arr = color.split("#");
        arr[1] = arr[1] + number.toString(16);
        return arr.join("#")
    } else{
        let string = color.split("(")[1].split(")")[0].trim();
        let colorstring = getComputedStyle(document.documentElement).getPropertyValue(string).trim();
        if (colorstring.length===4){
            let ones = colorstring.split("");
            ones[1] += ones[1];
            ones[2] += ones[2];
            ones[3] += ones[3];
            colorstring = ones.join("");
        }
        let arrs = colorstring.split("#");
        arrs[1] = arrs[1] + number.toString(16);
        return arrs.join("#")
    }
}