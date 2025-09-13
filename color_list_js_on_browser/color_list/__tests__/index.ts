const port = process.env.PORT ?? 4444;
const TARGET_PAGE_URL = `http://localhost:${port}`;

describe("Index page", () => {
  beforeAll(async () => {
    await page.goto(TARGET_PAGE_URL);
  });
  test("display Good!", async () => {
    const testText = await page.$eval("[data-test=div-test]", el =>
      (el as HTMLElement).innerText.trim()
    );
    expect(testText).toBe("Good!");
  });
  test("display Colors", async () => {
    const elmAttrs = await page.$$eval("[data-test=div-colors]>li", elms => {
      return elms.map(elm => ({
        color: elm.style.getPropertyValue("color"),
        backgroundColor: elm.style.getPropertyValue("background-color"),
        text: elm.innerText,
      }));
    });

    expect(elmAttrs[0].text).toBe("blue");
    expect(elmAttrs[0].color).toBe("blue");
    expect(elmAttrs[0].backgroundColor).toBe("rgb(238, 238, 238)");

    expect(elmAttrs[1].text).toBe("orange");
    expect(elmAttrs[1].color).toBe("orange");
    expect(elmAttrs[1].backgroundColor).toBe("rgb(255, 255, 255)");

    expect(elmAttrs[2].text).toBe("green");
    expect(elmAttrs[2].color).toBe("green");
    expect(elmAttrs[2].backgroundColor).toBe("rgb(238, 238, 238)");
  });
});
