
import { Dropdown } from "../dropdown/Dropdown";
import { screen, render, userEvent } from "../../tests/index";
import { waitFor } from "@testing-library/react";


const title = "Select the monster";
const allMonsters = ['rock', 'butterfly', 'roselie'];

describe('Dropdown', () => {
    it('should start closed', () => {
        render(<Dropdown
            title={title}
            monsters={allMonsters}
            onSelectPokemon={() => { }}
        />);

        expect(screen.queryByText(allMonsters[0])).not.toBeInTheDocument();
        expect(screen.queryByText(allMonsters[1])).not.toBeInTheDocument();
        expect(screen.queryByText(allMonsters[2])).not.toBeInTheDocument();
    });
    it('should have the button on the screen', () => {
        render(<Dropdown
            title={title}
            monsters={allMonsters}
            onSelectPokemon={() => { }}
        />);
        expect(screen.getByText(title)).toBeInTheDocument();
    });
    it('should show option when button are clicked', () => {
        render(<Dropdown
            title={title}
            monsters={allMonsters}
            onSelectPokemon={() => { }}
        />);
        expect(screen.queryByText(allMonsters[0])).not.toBeInTheDocument();
        expect(screen.queryByText(allMonsters[1])).not.toBeInTheDocument();
        expect(screen.queryByText(allMonsters[2])).not.toBeInTheDocument();

        userEvent.click(screen.getByRole('button', { name: title }));

        expect(screen.queryByRole('menuitem', { name: allMonsters[0] })).toBeInTheDocument();
        expect(screen.queryByRole('menuitem', { name: allMonsters[1] })).toBeInTheDocument();
        expect(screen.queryByRole('menuitem', { name: allMonsters[2] })).toBeInTheDocument();
    });

    it.only('should show option selected when item has been clicked ans close the dropdown', () => {
        const onSelect = jest.fn();
        render(<Dropdown
            title={title}
            monsters={allMonsters}
            onSelectPokemon={onSelect}
        />);
        userEvent.click(screen.getByRole('button', { name: title }));

        const option1 = screen.queryByRole('menuitem', { name: allMonsters[1] });
        expect(screen.queryByRole('menuitem', { name: allMonsters[0] })).toBeInTheDocument();
        expect(option1).toBeInTheDocument();
        expect(screen.queryByRole('menuitem', { name: allMonsters[2] })).toBeInTheDocument();

        userEvent.click(option1);

        expect(onSelect).toHaveBeenCalledWith(allMonsters[1]);

        expect(screen.queryByText(allMonsters[0])).not.toBeInTheDocument();
        expect(screen.queryByText(allMonsters[1])).not.toBeInTheDocument();
        expect(screen.queryByText(allMonsters[2])).not.toBeInTheDocument();

    });
});