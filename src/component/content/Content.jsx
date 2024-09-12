import React, { useState, useEffect } from 'react';

const API_KEY = '0a7ed0be32c07d1fb142c848'
const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/`;

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('IRR');
  const [exchangeRate, setExchangeRate] = useState(null);
  const [error, setError] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      fetch(`${API_URL}${fromCurrency}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.result === 'success') {
            setExchangeRate(data.conversion_rates[toCurrency]);
          } else {
            setError('Error fetching exchange rate');
          }
        })
        .catch(() => setError('Error fetching exchange rate'));
    }
  }, [fromCurrency, toCurrency]);

  const handleConvert = () => {
    if (!exchangeRate) {
      return;
    }
    const result = (amount * exchangeRate).toFixed(2);
    setConvertedAmount(result);
    setShowResult(true);
  };

  return (
    <section className="flex flex-grow justify-around items-center">
      <div className="w-1/2 bg-white p-10 rounded-lg shadow-lg my-8">
        <div className="flex items-center justify-around border-b border-tahiti-800 pb-4 mb-4">
          <button className="text-tahiti-700 font-semibold">تبدیل</button>
          <button className="text-gray-400">ارسال</button>
          <button className="text-gray-400">جدول</button>
          <button className="text-gray-400">هشدار</button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <label className="text-gray-600 pl-4">مقدار</label>
            <input
              type="number"
              className="border rounded p-2 w-full"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="1.00"
            />
          </div>

          <div className="flex justify-between space-x-4">
            <div className="flex-1">
              <label className="block text-gray-600 mb-2 pr-2">از</label>
              <select
                className="border rounded p-2 w-full"
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
              >
                <option value="USD">🇺🇸 دلار - US Dollar</option>
                <option value="IRR">🇮🇷 تومان - Iranian Toman</option>
                <option value="EUR">🇪🇺 یورو - Euro</option>
                <option value="GBP">🇬🇧 پوند - British Pound</option>
                <option value="AED">🇦🇪 درهم امارات - UAE Dirham</option>
                <option value="TRY">🇹🇷 لیر ترکیه - Turkish Lira</option>
                <option value="CNY">🇨🇳 یوان چین - Chinese Yuan</option>
                <option value="BHD">🇧🇭 دینار بحرین - Bahraini Dinar</option>
                <option value="GEL">🇬🇪 لاری گرجستان - Georgian Lari</option>
              </select>
            </div>
            <button className="text-gray-400 mt-6 pr-5">
              <i className="fas fa-exchange-alt"></i>
            </button>
            <div className="flex-1">
              <label className="block text-gray-600 mb-2 pr-2">به</label>
              <select
                className="border rounded p-2 w-full"
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
              >
                <option value="USD">🇺🇸 دلار - US Dollar</option>
                <option value="IRR">🇮🇷 تومان - Iranian Toman</option>
                <option value="EUR">🇪🇺 یورو - Euro</option>
                <option value="GBP">🇬🇧 پوند - British Pound</option>
                <option value="AED">🇦🇪 درهم امارات - UAE Dirham</option>
                <option value="TRY">🇹🇷 لیر ترکیه - Turkish Lira</option>
                <option value="CNY">🇨🇳 یوان چین - Chinese Yuan</option>
                <option value="BHD">🇧🇭 دینار بحرین - Bahraini Dinar</option>
                <option value="GEL">🇬🇪 لاری گرجستان - Georgian Lari</option>
              </select>
            </div>
          </div>

          <button
            className="bg-tahiti-700 text-white py-2 px-4 rounded w-full"
            onClick={handleConvert}
          >
            تبدیل
          </button>

          {showResult && !error && (
            <div className="m-6">
              <p className="text-lg">
                {amount} {fromCurrency} =
              </p>
              <h2 className="text-2xl font-bold mb-2">
                {convertedAmount} {toCurrency}
              </h2>
              <p className="text-gray-500">
                1 {fromCurrency} = {exchangeRate} {toCurrency}
              </p>
            </div>
          )}

          {error && <p className="text-red-500">{error}</p>}

          <div className="text-gray-500 text-xs mt-4 text-center">
            <i className="fas fa-info-circle mx-2"></i>
            <a href="#" className="text-gray-600 font-bold">
              برای امتیاز دهی <strong className="text-tahiti-600">لاگین</strong> شوید
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}