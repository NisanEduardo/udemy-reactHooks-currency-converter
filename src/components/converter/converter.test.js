import axiosMock from "axios";
import { findByTestId, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Converter } from "./converter";

describe("should test converter components and actions", () => {
  test("should render coponent without errors", () => {
    render(<Converter />);
  });

  it("should simulate currency converter", async () => {
    const { findByTestId, getByText } = render(<Converter />);

    axiosMock.get.mockResolvedValueOnce({
      data: {
        success: true,
        rates: {
          BRL: 5.503954,
          USD: 1.062457,
        },
      },
    });

    fireEvent.click(getByText("Converter"));

    const modal = await findByTestId("modal");

    expect(axiosMock.get).toHaveBeenCalledTimes(1);

    expect(modal).toHaveTextContent("1 BRL = 0.19 USD");
  });
});
