import { HiendSystems.TaskPage } from './app.po';

describe('hiend-systems.task App', function() {
  let page: HiendSystems.TaskPage;

  beforeEach(() => {
    page = new HiendSystems.TaskPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('hst works!');
  });
});
