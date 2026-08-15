import { describe, expect, test } from "bun:test";
import { site } from "../src/lib/site";

const dash = /[—–]/;

describe("site metadata & profile quality", () => {
  test("site configuration is well-formed", () => {
    expect(site.name).toBe("ngxlabs.tech");
    expect(site.founder.name).toBe("Naveen Gumaste");
    expect(site.url).toBe("https://ngxlabs.tech");
    expect(site.email).toBe("contact@naveengumaste.me");
  });

  test("description stays inside high-quality bounds", () => {
    expect(site.description.length).toBeGreaterThanOrEqual(100);
    expect(site.description.length).toBeLessThanOrEqual(160);
  });

  test("site copy has no forbidden em or en dashes", () => {
    expect(dash.test(site.description)).toBe(false);
    expect(dash.test(site.founder.bio)).toBe(false);
  });
});
