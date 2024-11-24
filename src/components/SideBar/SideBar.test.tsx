import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { I18nextProvider, useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { fetchWeather } from '../../redux/slices/weatherSlice';
import { AppDispatch, setupStore } from '../../redux/store';
import { fetchForecast } from '../../redux/slices/forecastSlice';
import { CONTACT_FORM } from '../../config/constants/navigationItems';
import { MOCK_STORE_STATE } from '../../config/mocks/storeMockState';
import { SideBar } from './SideBar';
import i18n from '../../config/i18n';
import { fireEvent, render, within } from '@testing-library/react';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('./SideBar', () => ({
  ...jest.requireActual('./SideBar'),
  changeWeatherCity: jest.fn(),
}));

describe('Sidebar Component', () => {
  let store: ReturnType<typeof setupStore>;

  beforeEach(() => {
    store = setupStore(MOCK_STORE_STATE);
  });

  it('Should render component', () => {
    const screen = renderSut();
    const navigationItemsElement = screen.getByRole('navigation');
    expect(navigationItemsElement).toBeInTheDocument();
  });

  it('Should render list cities', () => {
    const screen = renderSut();
    const navigationItemsElement = screen.getByText('London');
    expect(navigationItemsElement).toBeInTheDocument();
  });

  it('Should render contact button', () => {
    const screen = renderSut();
    const navigationItemsElement = screen.getByText('Contact');
    expect(navigationItemsElement).toBeInTheDocument();
  });

  const renderSut = () => {
    return render(
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <SideBar />
        </I18nextProvider>
      </Provider>
    );
  };
});
