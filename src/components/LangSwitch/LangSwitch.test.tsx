import React from 'react';
import { describe, expect, test } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setupStore, RootState } from '../../redux/store';
import { LangSwitch } from './LangSwitch';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../config/i18n';
import axios from 'axios';
import { MOCK_STORE_STATE } from '../../config/mocks/storeMockState';

export const fetchData = async () => {
  const response = await axios.get('/api/data');
  return {
    data: null,
  };
};

jest.mock('../../services/weatherService');

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('../../redux/slices/weatherSlice', () => ({
  fetchWeather: jest.fn(),
  fetchForecast: jest.fn(),
}));

describe('LangSwitch Component', () => {
  let store: ReturnType<typeof setupStore>;
  const mockDispatch = jest.fn();

  beforeEach(() => {
    store = setupStore(MOCK_STORE_STATE);
  });

  it('Should render and dispatch actions when language change', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <LangSwitch />
        </I18nextProvider>
      </Provider>
    );

    const languageSelector = getByRole('combobox');
    expect(languageSelector).toBeDefined();

    fireEvent.change(languageSelector, { target: { value: 'es' } });

    expect(useTranslation().i18n.changeLanguage).toHaveBeenCalledWith('es');
  });
});
