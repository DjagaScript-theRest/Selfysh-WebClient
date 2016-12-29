export class MenuItem {
    constructor(public name: string, public link: String[], public children: MenuItem[] = null) { }
}