import { render, screen } from "@testing-library/react";
import { test, expect, describe } from "vitest";
import App from "../App";

describe("App", () => {
    test("renders get component", () => {
        render(<App />);
        const elent = screen.getByText("Loading...");
        expect(elent).toBeDefined();
    })
})