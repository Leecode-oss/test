
/**
 * 使用此文件来定义自定义函数和图形块。
 * 想了解更详细的信息，请前往 https://makecode.microbit.org/blocks/custom
 */

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

enum  MyColor
{
    red,
    black,
    white,
}
/**
 * 自定义图形块
 */
//% weight=100 color=#0fbc11 icon=""
namespace LightnessDemo {
    /**
     * TODO: 在此处描述您的函数
     * @param n 在此处描述参数, eg: 5
     * @param s 在此处描述参数, eg: "Hello"
     * @param e 在此处描述参数
     */
    //% block
    export function foo(n: number, s: string, e: MyColor): void {
        // Add code here
    }

    /**
     * TODO: 在此处描述您的函数
     * @param value 在此处描述"值", eg: 5
     */
    //% block
    export function lightness(value: number): number {
        return value <= 1 ? value : lightness(value -1) + lightness(value - 2);
    }
}
