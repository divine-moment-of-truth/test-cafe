import { Selector } from 'testcafe';

// prettier-ignore
fixture `Getting started with Testcafe`
    .page `https://devexpress.github.io/testcafe/example/`
    .before(async t => {
        // Test setup goes here
        // await runDatabaseReset()
        // await seedTestData()
    })
    .beforeEach(async t => {
        // Runs before every test
        await t.setTestSpeed(1);    // 0.1 - slow speed
        await t.setPageLoadTimeout(5000);
    })
    .after(async t => {
        // Cleaning test data
        // Logging and sending data to monitoring systems
    })
    .afterEach(async t => {
        // Runs after each test
    })


test.skip('My first testcafe test', async t => {  
    const developer_name_input = Selector('#developer-name');
    const submit_button = Selector('#submit-button');
    const article_text = Selector('#article-header').innerText;

    // The next two lines are used for taking screen shots:-
    // await t.takeScreenshot({ fullPage: true });
    // await t.takeElementScreenshot(submit_button);

    await t.typeText(developer_name_input, 'John');
    await t.wait(3000); // Waits 3 seconds before the next step is executed
    await t.click(submit_button);

    await t.expect(article_text).contains('John');

    // Testcafe API function:
    // Click
    await t.click('select', { options });

    // Double Click
    await t.doubleClick('selector', { options });

    // Right Click
    await t.rightClick('selector', { options });

    // Drag Element
    await t.drag('selector', 200, 0, {options });

    // Hover
    await t.hover('selector', { options });

    // Select Text
    await t.selectText('selector');

    // Type Text
    await t.typeText('selector', 'write text');

    // Press Key
    await t.pressKey('backspace');

    // Navigate
    await t.navigateTo('url');

    // Take screenshot
    await t.takeScreenshot()
    await t.takeElementScreenshot()

    // Resize Window
    await t.resizeWindow(800, 600);


    // Testcafe Assertions:-
    // Deep Equal - must match on type and value
    await t.expect('foo').eql('foo', 'message', options);

    // Not Deep Equal - must NOT match on type and value
    await t.expect('foo').notEql('foo');
    
    // OK - tests where the result between the expect brackets is TRUE
    await t.expect(true).ok();

    // Not OK  - tests where the result between the expect brackets is FALSE
    await t.expect(true).notOk();

    // Contains - checks if the thing between the expect() brackets contains 'o'. If it does then it passes
    await t.expect('foo').contains('o');

    // Not Contains - checks if the thing between the expect() brackets does not contain 'o'. If it does NOT then it passes
    await t.expect('foo').notContains('o');

    // Greater Than. If the value between the expect() bracket is greater than 5, then the test passes
    await t.expect(10).gt(5);

    // Greater Than or Equal to. If the value between the expect() bracket is greater than or equal to 10, then the test passes
    await t.expect(10).gte(10);

    // Less Than. If the value between the expect() bracket is less than 10, then the test passes
    await t.expect(5).lt(10);

    // Less Than or Equal to. If the value between the expect() bracket is less than or equal to 10, then the test passes
    await t.expect(10).lte(10);

    // Within - If the value between the expect() brackets is between 1 and 100, then the test passes
    await t.expect(10).within(1, 100);

    // Not Within - If the value between the expect() brackets is not between 5 and 50, then the test passes
    await t.expect(10).notWithin(5, 50);

})
