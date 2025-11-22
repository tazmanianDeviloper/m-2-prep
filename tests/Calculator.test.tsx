import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "@/components/Calculator";


describe("Calculator Component", () => {
    test("renders without crashing", () => {
        const { asFragment } = render(<Calculator/>);
        expect(asFragment()).toMatchSnapshot();
    });

    test("Adding two numbers displays the correct sum", () => {
        render(<Calculator />);

        const firstInput = screen.getByLabelText(/Enter a number/i);
        const secondInput = screen.getByLabelText(/Enter another number/i);
        const addButton = screen.getByRole("button", { name: "+" });

        fireEvent.change(firstInput, { target: { value: "2" } });
        fireEvent.change(secondInput, { target: { value: "3" } });

        fireEvent.click(addButton);

        expect(screen.getByText(/Result:/i).textContent).toBe("Result: 5");
    });
    test("Subtracting displays the correct difference", () => {
        render(<Calculator />);

        const firstInput = screen.getByLabelText(/Enter a number/i);
        const secondInput = screen.getByLabelText(/Enter another number/i);
        const subtractButton = screen.getByRole("button", { name: "-" });

        fireEvent.change(firstInput, { target: { value: "8" } });
        fireEvent.change(secondInput, { target: { value: "3" } });

        fireEvent.click(subtractButton);

        expect(screen.getByText(/Result:/i).textContent).toBe("Result: 5");
    });
    test("Multiplying displays the correct product", () => {
        render(<Calculator />);

        const firstInput = screen.getByLabelText(/Enter a number/i);
        const secondInput = screen.getByLabelText(/Enter another number/i);
        const multiplyButton = screen.getByRole("button", { name: "*" });

        fireEvent.change(firstInput, { target: { value: "4" } });
        fireEvent.change(secondInput, { target: { value: "3" } });

        fireEvent.click(multiplyButton);

        expect(screen.getByText(/Result:/i).textContent).toBe("Result: 12");
    });
    test("Dividing displays the correct quotient", () => {
        render(<Calculator />);

        const firstInput = screen.getByLabelText(/Enter a number/i);
        const secondInput = screen.getByLabelText(/Enter another number/i);
        const divideButton = screen.getByRole("button", { name: "/" });

        fireEvent.change(firstInput, { target: { value: "10" } });
        fireEvent.change(secondInput, { target: { value: "2" } });

        fireEvent.click(divideButton);

        expect(screen.getByText(/Result:/i).textContent).toBe("Result: 5");
    });
});
