import { screen } from "@testing-library/react";
import { Navbar } from "./Navbar";
import { render } from "./test-ui/render";

describe("Navbar", () => {
  it("renders", () => {
    const { asFragment } = render(<Navbar />).now();
    expect(asFragment()).toMatchSnapshot();
  });
  it("displays routes", () => {
    render(<Navbar />).now();
    expect(screen.getByText("Home")).toBeVisible();
    expect(screen.getByText("Create")).toBeVisible();
  });
});
