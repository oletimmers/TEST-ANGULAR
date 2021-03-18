describe('Darkmodetest', () => {

  beforeEach(() => {
    browser.get('http://localhost:4200/')
  })



  it('drag and drop "Martijn" should be dragged to second list, post should be successful', async () => {
    let item = element.all(by.id('toPost')).get(0).getWebElement();
    let target = element(by.id('Posted')).getWebElement();



    element.all(by.id('toPost')).get(0).getWebElement().getText().then(function(text) {
      console.log("DIT IS DE TEXT " + text);
    });

    await browser.actions().dragAndDrop(await item, await target).mouseUp().perform();

    expect(target.getText()).toEqual('Martijn');
  });

  // it('drag and drop all items piece by piece, should be dragged to second list, posts should be successful', async () => {
  //   let item = element.all(by.id('app-first-component .example-box')).get(0);
  //   // let item = element.all(by.css('app-first-component .example-box')).get(1);
  //   // let item = element.all(by.css('app-first-component .example-box')).get(2);
  //   let target = element.all(by.css('app-first-component .example-box'));
  //
  //
  //   await browser.actions().dragAndDrop(await item.getWebElement(), await target.get(0).getWebElement()).perform();
  //   expect(target.get(0).getWebElement().getText()).toEqual('Martijn');
  //
  //   await browser.actions().dragAndDrop(await item.getWebElement(), await target.get(1).getWebElement()).perform();
  //   expect(target.get(1).getWebElement().getText()).toEqual('Ryan');
  //
  //   await browser.actions().dragAndDrop(await item.getWebElement(), await target.get(2).getWebElement()).perform();
  //   expect(target.get(2).getWebElement().getText()).toEqual('Jan Willem');
  //
  //   await browser.actions().dragAndDrop(await item.getWebElement(), await target.get(3).getWebElement()).perform();
  //   expect(target.get(3).getWebElement().getText()).toEqual('Ole');
  // });

});
