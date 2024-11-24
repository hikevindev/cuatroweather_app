import React from 'react';
import { render } from '@testing-library/react';
import i18n from '../../config/i18n';
import { I18nextProvider } from 'react-i18next';
import { useAuthSession } from '../../hooks/useAuthSession';
import { setupStore } from '../../redux/store';
import { MOCK_STORE_STATE } from '../../config/mocks/storeMockState';
import { Provider } from 'react-redux';
import { NavBar } from './NavBar';

jest.mock('../../hooks/useAuthSession', () => ({
  useAuthSession: jest.fn(),
}));

beforeEach(() => {
  (useAuthSession as jest.Mock).mockReturnValue({
    authenticated: true,
    signOut: jest.fn(),
  });
});

describe('NavBar Component', () => {
  let store: ReturnType<typeof setupStore>;

  beforeEach(() => {
    jest.clearAllMocks();
    store = setupStore(MOCK_STORE_STATE);
  });

  it('Should render component', () => {
    const screen = renderSut();

    const hasAppName = screen.getByText('CuatroWeatherApp');
    expect(hasAppName).toBeInTheDocument();
  });

  it('should show the signOut button when authenticated is true', () => {
    const screen = renderSut();

    const signOutButton = screen.getByRole('button', { name: /Sign Out/i });
    expect(signOutButton).toBeInTheDocument();
  });

  it('Should render component no logged', () => {
    (useAuthSession as jest.Mock).mockReturnValueOnce({
      authenticated: false,
      signOut: jest.fn(),
    });
    const screen = renderSut();

    expect(screen.queryByText('Sign Out')).not.toBeInTheDocument();
  });

  const renderSut = () => {
    return render(
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <NavBar />
        </I18nextProvider>
      </Provider>
    );
  };
});
