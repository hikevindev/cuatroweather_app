import { I18nextProvider } from 'react-i18next';
import { setupStore } from '../../redux/store';
import { MOCK_STORE_STATE } from '../../config/mocks/storeMockState';
import { Provider } from 'react-redux';
import { ContactForm } from './ContactForm';
import i18n from '../../config/i18n';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Contact Form Component', () => {
  let store: ReturnType<typeof setupStore>;

  beforeEach(() => {
    jest.clearAllMocks();
    store = setupStore(MOCK_STORE_STATE);
  });

  it('Should render contact form component', () => {
    const screen = renderSut();

    const isRenderContactoComponent = screen.getByText('Contact form');
    expect(isRenderContactoComponent).toBeInTheDocument();
  });

  it('Should show disabled button when init component', () => {
    const screen = renderSut();

    const buttonSubmit = screen.getByRole('button', { name: /Send/i });
    const isDisabled = buttonSubmit.getAttribute('disabled');

    expect(isDisabled).not.toBeTruthy();
  });

  it('Should can type on inputs', async () => {
    const screen = renderSut();

    const dateTimeValue = '2024-11-25T14:30';
    const dateInput = screen.getByTestId('datetime-input');

    await userEvent.type(dateInput, dateTimeValue);
    await userEvent.type(screen.getByPlaceholderText('Name'), 'Kevin');
    await userEvent.type(screen.getByPlaceholderText('City'), 'London');
    await userEvent.type(
      screen.getByPlaceholderText('Email'),
      'hiapp@gmail.com'
    );
    await userEvent.type(screen.getByPlaceholderText('Phone'), '66530266');
  });

  it('Should show button send enabled', async () => {
    const screen = renderSut();

    const dateTimeValue = '2024-11-25T14:30';
    const dateInput = screen.getByTestId('datetime-input');

    await userEvent.type(dateInput, dateTimeValue);
    await userEvent.type(screen.getByPlaceholderText('Name'), 'Kevin');
    await userEvent.type(screen.getByPlaceholderText('City'), 'London');
    await userEvent.type(
      screen.getByPlaceholderText('Email'),
      'hiapp@gmail.com'
    );
    await userEvent.type(screen.getByPlaceholderText('Phone'), '66530266');

    const buttonSubmit = screen.getByRole('button', { name: /Send/i });
    const isDisabled = buttonSubmit.getAttribute('disabled');

    expect(isDisabled).toBe(null);
  });

  const renderSut = () => {
    return render(
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <ContactForm />
        </I18nextProvider>
      </Provider>
    );
  };
});
