import Navbar from '../page-objects/components/Navbar';
import SearchResultsPage from '../page-objects/pages/SearchResultsPage';

const navbar = new Navbar();
const searchResultsPage = new SearchResultsPage();

// prettier-ignore
fixture `Search box test`
    .page(`http://zero.webappsecurity.com/index.html`)

test('User can search for information using search box', async t => {

    // Actions
    navbar.search('Online bank');

    //Assertions
    await t.expect(searchResultsPage.resultsTitle.exists).ok();
    await t.expect(navbar.searchBox.exists).ok();
    await t
        .expect(searchResultsPage.linkText.innerText)
        .contains('Zero - Free Access to Online Banking');

});
    