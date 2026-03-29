import { renderHook } from "@testing-library/react-hooks";
import { type ReactNode } from "react";
import { IntlProvider } from "react-intl";

import { useContextualLink } from "./useContextualLink";

const wrapper = ({ children }: { children: ReactNode }) => (
  <IntlProvider locale="EN">{children}</IntlProvider>
);

describe("useContextualLink", () => {
  it("should return null for staff_members", () => {
    // Act
    const { result } = renderHook(() => useContextualLink("staff_members"), { wrapper });

    // Assert
    expect(result.current).toBeNull();
  });

  it("should return null for extending_saleor", () => {
    // Act
    const { result } = renderHook(() => useContextualLink("extending_saleor"), { wrapper });

    // Assert
    expect(result.current).toBeNull();
  });

  it("should return null for dev_panel", () => {
    // Act
    const { result } = renderHook(() => useContextualLink("dev_panel"), { wrapper });

    // Assert
    expect(result.current).toBeNull();
  });

  it("should return null for order_list", () => {
    // Act
    const { result } = renderHook(() => useContextualLink("order_list"), { wrapper });

    // Assert
    expect(result.current).toBeNull();
  });

  it("should return null for gift_cards", () => {
    // Act
    const { result } = renderHook(() => useContextualLink("gift_cards"), { wrapper });

    // Assert
    expect(result.current).toBeNull();
  });

  it("should return null for extensions", () => {
    // Act
    const { result } = renderHook(() => useContextualLink("extensions"), { wrapper });

    // Assert
    expect(result.current).toBeNull();
  });
});
