import { JSX } from "solid-js/jsx-runtime";
import { handleToast } from "~/components/toast/toast-helper"; 

export const simpleMultiplication = (num: number): number =>
    num * (num % 2 === 0 ? 8 : 9);

export const squareSum = (numbers: number[]): number =>
    numbers.reduce((a, c) => a + c * c, 0)

export const findSmallestInt = (args: number[]): number =>
    Math.min(...args)

export const findBiggestInt = (args: number[]): number =>
    Math.max(...args)

export const invert = (array: number[]): number[] =>
    array.map(x => -x);

export const rowSumOddNumbers = (n: number): number =>
    n * n * n

export const oddOrEven = (array: number[]): string =>
    array.reduce((a, x) => a + x, 0) % 2 === 0 ? "even" : "odd"

export const reverseSeq = (n: number): number[] =>
    Array.from({ length: n }, (_, i) => n - i);

export const numberToString = (num: number): string => num + '';

export const xo = (str: string): boolean =>
    str.replace(/x/gi, '').length ===
    str.replace(/o/gi, '').length;

export const sum = (...nums: any[]): number =>
    nums.reduce((a, c) => a + c, 0)

declare global {
    interface Array<T> {
        last(): T | undefined;
    }
}

if (!Array.prototype.last) {
    Array.prototype.last = function () {
        if (!this.length) {
            return undefined;
        }
        return this.at(-1);
    };
}

export const toggle = (val: string, options: string) => {
    let o = options.split('|')
    o = o.map(o => o.trim())
    return val === o[0] ? o[1] : o[0]
}

export const toggleSet = (set: Function, options: string) => {
    let o = options.split('|')
    o.forEach(o => o.trim())
    set(val => val === o[0] ? o[1] : o[0]);
}

export const elseNull = (val: any, val2: any) =>
    val === val2 ? null : val2;

export const numbersfrom = (x: number, y: number): number[] =>
    Array.from({ length: y - x + 1 }, (_, i) => x + i);

export function valueOrDefault<T>(value: T | undefined, defaultValue: T) {
    return typeof value === 'undefined' ? defaultValue : value;
}

export function isFileType(file, type) {
    return file.type.match(type)
}

export const values = (o) => Object.values(o)

export function handleFiles(images, newFiles, type = 'image', setImages = (e) => '') {
    let result = [];
    for (let i = 0; i < newFiles.length; i++) {
        let file = newFiles[i]; console.log('for in', file)
        if (!isFileType(file, type)) {
            handleToast()
            continue;
        }

        if (images.every(i => i.name !== file.name)) {
            result.push(file)
        }
    }
    if (result.length === 0) return images
    setImages([...images, ...result])
    return result
}

export const deleteOne = (ls, index) =>
    ls.filter((_, i) => i !== index)

export const toUrl = (img) =>
    URL.createObjectURL(img)

export const intersection = (arr1, arr2) =>
    arr1.filter(x => arr2.includes(x));

export const isTopOfDiv = (ref) =>
    ref.scrollTop === 0;

export const bottomOrTop = (ref) =>
    ref.scrollTop === 0 ? ref.scrollHeight : 0;

export const toDataURL = (url: any) => fetch(url)
    .then(response => response.blob())
    .then(blob => new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result)
        reader.onerror = reject
        reader.readAsDataURL(blob)
    }))

export function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
}

export function getImageSizeInBytes(imgURL) {
    var request = new XMLHttpRequest();
    request.open("HEAD", imgURL, false);
    request.send(null);
    var headerText = request.getAllResponseHeaders();
    var re = /Content\-Length\s*:\s*(\d+)/i;
    re.exec(headerText);
    return parseInt(RegExp.$1);
}
   
export function getRatio(a = 0, b = 0): number {
    if (b == 0)
        return a
    return getRatio(b, a % b)
}

export function isFileAPISupported() {
    if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
        alert('The File APIs are not fully supported in this browser.');
        return false;
    }
    return true;
}

export function dataURLSize(src: string){
    var commaIndex = src.indexOf(","); // find the comma position
    let base64str = src.substring(commaIndex + 1);
    var decoded = atob(base64str);
    return decoded.length;
}

export function humanFileSize(bytes, si = false, precision = 1) {
    if (typeof bytes !== "number" || isNaN(bytes)) {
      return "Invalid input";
    }
    const units = si
      ? ["B", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
      : ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
    const base = si ? 1000 : 1024;
    const exponent = Math.min(
      Math.floor(Math.log(Math.abs(bytes)) / Math.log(base)),
      units.length - 1
    );
    const quotient = bytes / Math.pow(base, exponent);
    return quotient.toFixed(precision) + " " + units[exponent];
}
