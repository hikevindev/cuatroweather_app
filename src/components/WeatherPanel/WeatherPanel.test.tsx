import React from 'react';
import { Provider } from 'react-redux';
import { setupStore } from '../../redux/store';

import './WeatherPanel.scss';
import { I18nextProvider } from 'react-i18next';
import { WeatherPanel } from './WeatherPanel';
import i18n from '../../config/i18n';
import { render } from '@testing-library/react';
import { MOCK_STORE_STATE } from '../../config/mocks/storeMockState';

describe('Weather Panel Component', () => {
  let store: ReturnType<typeof setupStore>;

  beforeEach(() => {
    jest.clearAllMocks();
    store = setupStore(MOCK_STORE_STATE);
  });

  it('Should render component', () => {
    const screen = renderSut();

    const componentRendered = screen.getByText('Current Weather');
    expect(componentRendered).toBeInTheDocument();
  });

  it('Should current wheather', () => {
    const screen = renderSut();

    const tempText = screen.container.querySelector('.current-temp');
    const isCurrentTemp = tempText.textContent.includes('24ºC');
    expect(isCurrentTemp).toBeTruthy();
  });

  it('Should render panel data', () => {
    const screen = renderSut();

    const componentRendered = screen.getByText('City');
    const isCitySelected =
      componentRendered.textContent.includes('City London');
    expect(isCitySelected).toBeTruthy();
  });

  const renderSut = () => {
    return render(
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <WeatherPanel />
        </I18nextProvider>
      </Provider>
    );
  };
});
