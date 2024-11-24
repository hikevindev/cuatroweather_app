import React from 'react';
import { render } from '@testing-library/react';
import i18n from '../../config/i18n';

import './MinimalCard.scss';
import '../../../node_modules/moment/min/locales';
import { setupStore } from '../../redux/store';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { MinimalCard } from './MinimalCard';
import { MOCK_STORE_STATE } from '../../config/mocks/storeMockState';

describe('MinimalCard Component', () => {
  let store: ReturnType<typeof setupStore>;

  beforeEach(() => {
    store = setupStore(MOCK_STORE_STATE);
  });

  it('Should render component', () => {
    const componentProps = {
      dt_txt: '2024-11-24 15:00:00',
      main: {
        temp_min: 1,
        temp_max: 10,
      },
      weather: [
        {
          icon: '03d',
        },
      ],
    };
    const screen = renderSut(componentProps);

    const dateWeatherIsRender = screen.getByText('24/11/2024, 3:00');
    expect(dateWeatherIsRender).toBeInTheDocument();

    const minTempWeatherIsRender = screen.getByText('1º/10º');
    expect(minTempWeatherIsRender).toBeInTheDocument();

    const iconWeatherIsRender = screen.getByRole('img');
    const srcIconValue = iconWeatherIsRender.getAttribute('src');
    expect(srcIconValue).toContain(componentProps.weather[0].icon);
  });

  const renderSut = (props: any) => {
    return render(
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <MinimalCard
            data={{
              ...props,
            }}
          />
        </I18nextProvider>
      </Provider>
    );
  };
});
