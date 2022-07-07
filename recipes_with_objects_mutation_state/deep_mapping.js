const deepMapWith = (fn) =>
    function innerDeepMapWith (tree) {
        return Array.prototype.map.call(tree, (el) =>
            Array.isArray(el)
                ? innerDeepMapWith(element)
                : fn(el)
            );
   }