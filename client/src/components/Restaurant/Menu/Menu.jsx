import React, { useState } from "react";

// components
import MenuCollection from "../MenuCollection";

function Menu() {
const [menus] = useState([
    "https://b.zmtcdn.com/data/menus/069/19257069/9ba55d8b059559d9c0e30f0e1fc4b65d.jpg",
        "https://b.zmtcdn.com/data/menus/179/19013179/6cd884a189a546bee45fbac0acf8c355.jpg",
        "https://b.zmtcdn.com/data/menus/179/19013179/203e52d7fa4f48e25e7c50d5551a2861.jpg"
]);
return (
    <div className="flex flex-wrap gap-3">
        <MenuCollection menuTitle="Menu" pages={menus.length} image={menus} />
    </div>
);
}

export default Menu;