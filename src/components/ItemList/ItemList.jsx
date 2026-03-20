import { Item } from "../Item/Item";

export function ItemList({items}) {
    
    // -------------- //
    // --- Render --- //
    // -------------- //
    
    return (
        <>
            {items.map((item) => (
                <Item
                    key={item.id}
                    product={item}
                    promo={item.price > 200000 ? true : false}
                />
            ))}
        </>
    );
}