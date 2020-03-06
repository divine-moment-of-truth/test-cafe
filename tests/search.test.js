import { Selector } from 'testcafe';
// import xPathToCss from 'xpath-to-css';

// prettier-ignore
fixture `Search box test`
    .page(`http://zero.webappsecurity.com/index.html`)

test('User can search for information using search box', async t => {

    // Selectors
    const searchBox = Selector('#searchTerm');
    const resultsTitle = Selector('h2');
    const linkText = Selector('div').innerText;

    // XPATH TO CSS EXAMPLE
/*  const xPath = `'//div[@id="foo"[2]/span[@class="bar"]//a[contains(@class, "baz")]//img[1]'`;
    const css = xPathToCss(xPath);
    console.log(css);
*/

    // Actions
    await t.typeText(searchBox, 'Online bank', { paste: true });
    await t.pressKey('enter');

    //Assertions
    await t.expect(resultsTitle.exists).ok();
    await t.expect(searchBox.exists).ok();
    await t.expect(linkText).contains('Zero - Free Access to Online Banking');

});
    