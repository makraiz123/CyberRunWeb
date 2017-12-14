import { HomeComponent } from './home.component';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let mockModalService = null;

  beforeEach(() => {
    mockModalService = jasmine.createSpyObj('BsModalService', ['show']);
    component = new HomeComponent(mockModalService);
  });

  it('should have openModal method', () => {
    // expect(component.openModal).toBeTruthy();
  });

  it('should call modal service show method', () => {
    // component.openModal(null);
    expect(mockModalService.show).toHaveBeenCalledWith(null);
  });
});
