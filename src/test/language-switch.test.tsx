import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { LanguageProvider } from "@/contexts/language-context";
import Index from "@/pages/Index";

describe("language switch", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.lang = "id";
  });

  it("switches the homepage content to English and persists the choice", () => {
    render(
      <LanguageProvider>
        <Index />
      </LanguageProvider>,
    );

    expect(
      screen.getByRole("heading", { name: /Siap Melayani Kebutuhan Injeksi/i }),
    ).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole("button", { name: /Ganti bahasa ke Bahasa Inggris/i }),
    );

    expect(
      screen.getByRole("heading", {
        name: /Ready to Support Your Plastic Injection Needs/i,
      }),
    ).toBeInTheDocument();
    expect(window.localStorage.getItem("subita-language")).toBe("en");
    expect(document.documentElement.lang).toBe("en");
  });

  it("uses the persisted language on initial render", () => {
    window.localStorage.setItem("subita-language", "en");

    render(
      <LanguageProvider>
        <Index />
      </LanguageProvider>,
    );

    expect(
      screen.getByRole("heading", {
        name: /Ready to Support Your Plastic Injection Needs/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Switch language to Bahasa Indonesia/i }),
    ).toBeInTheDocument();
  });
});
