// CalcCaesar.js
import React, { useState } from 'react';
import caesarcipher from '../Crypto/CaesarCipher';
import { Link } from 'react-router-dom';
import './CalcCaisar.css';

const CalculatorCaesar = () => {
  const [text, setText] = useState('');
  const [key, setKey] = useState(0);
  const [direction, setDirection] = useState('right');
  const [result, setResult] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyChange = (e) => {
    setKey(parseInt(e.target.value, 10));
  };

  const handleDirectionChange = (e) => {
    setDirection(e.target.value);
  };

  const handleEncrypt = () => {
    const encryptedResult = caesarcipher(text, key, direction);
    setResult(encryptedResult);
  };

  const handleDecrypt = () => {
    const decryptedResult = caesarcipher(text, key, direction === 'right' ? 'left' : 'right');
    setResult(decryptedResult);
  };

  const handleClear = () => {
    setText('');
    setKey(0);
    setDirection('right');
    setResult('');
  };

  return (
    <>
      <div className="container-caesar">
        <h1>Caesar Cipher Calculator</h1>
        <nav>
          <ul>
            <li><Link to="/">Affine Cipher</Link></li>
            <li><Link to="/caesarcipher">Caesar Cipher</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <label>
          <p>Text:</p>
          <textarea
            placeholder="Masukkan text disini..."
            value={text}
            onChange={handleTextChange}
          />
        </label>
        <label>
          Key:
          <input
            type="number"
            value={key}
            onChange={handleKeyChange}
          />
        </label>
        <label>
          <div className="direction-container">
            <label className="direction-label">
              <input
                type="checkbox"
                value="right"
                checked={direction === 'right'}
                onChange={handleDirectionChange}
                className="direction-checkbox"
              />
              Left Direction
            </label>
            <label className="direction-label">
              <input
                type="checkbox"
                value="left"
                checked={direction === 'left'}
                onChange={handleDirectionChange}
                className="direction-checkbox"
              />
              Right Direction
            </label>
          </div>
        </label>
        <div className="btn-container-caesar">
          <button className="btn-encrypt" onClick={handleEncrypt}>Enkripsi</button>
          <button className="btn-decrypt" onClick={handleDecrypt}>Deskripsi</button>
          <button className="btn-clear" onClick={handleClear}>Clear</button>
        </div>
        <div className="output-caesar">
          {result && (
            <>
              <strong>Result:</strong>
              <div className="output-item-caesar">
                <textarea value={result} readOnly />
                {result.startsWith('Error') && <div className="error-caesar">{result}</div>}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CalculatorCaesar;
