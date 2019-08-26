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
        return color
    }
}