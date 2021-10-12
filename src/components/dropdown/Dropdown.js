import React, { useState } from "react";

export const Dropdown = ({ title, monsters, onSelectPokemon }) => {
    const [open, setOpen] = useState(false);

    const handleClickButton = (option) => {
        onSelectPokemon(option);
        setOpen(open => !open)
    };

    return (
        <>
            <button onClick={() => setOpen(open => !open)} >{title}</button>
            {
                open && (
                    <ul role="menu" data-test="menu-el">
                        {monsters.map(poke => (<li key={poke} role="menuitem" onClick={() => handleClickButton(poke)}>{poke}</li>))}
                    </ul>
                )
            }
        </>
    )
};