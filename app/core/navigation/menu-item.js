"use strict";
var MenuItem = (function () {
    function MenuItem(name, link, children) {
        if (children === void 0) { children = null; }
        this.name = name;
        this.link = link;
        this.children = children;
    }
    return MenuItem;
}());
exports.MenuItem = MenuItem;
//# sourceMappingURL=menu-item.js.map