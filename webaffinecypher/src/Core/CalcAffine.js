//CalcAffine.js
import React, { useState } from 'react';
import { enkripsi, deskripsi } from '../Crypto/AffineCipher'; 
import { Link } from 'react-router-dom';
import '../App.css';

const CalculatorAffine = () => {
    const [inputText, setInputText] = useState('');
    const [outputEnkripsi, setOutputEnkripsi] = useState('');
    const [outputDeskripsi, setOutputDeskripsi] = useState('');
    const [keyA, setKeyA] = useState(1);
    const [keyB, setKeyB] = useState(1);

    const handleEnkripsi = () => {
        try {
            const hasilenkripsiText = enkripsi(inputText, keyA, keyB);
            setOutputEnkripsi(hasilenkripsiText);
            setOutputDeskripsi('');
        } catch (error) {
            console.error(error.message);
            setOutputEnkripsi('Inputan kamu salah');
        }
    };

    const handleDeskripsi = () => {
        try {
            const deskripsiText = deskripsi(inputText, keyA, keyB);
            setOutputDeskripsi(deskripsiText);
            setOutputEnkripsi('');
        } catch (error) {
            console.error(error.message);
            setOutputDeskripsi('Inputan kamu salah.');
        }
    };

    const handleClear = () => {
        setInputText('');
        setOutputEnkripsi('');
        setOutputDeskripsi('');
        setKeyA(1); 
        setKeyB(1); 
    };

    return (
        <>
        <div className="container">
            <h1>Calculator Affine Cipher</h1>
            <nav>
                <ul>
                    <li><Link to="/">Affine Cipher</Link></li>
                    <li><Link to="/caesarcipher">Caesar Cipher</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <label>
                Kunci a :
                <input
                    type="number"
                    value={keyA}
                    onChange={(e) => setKeyA(parseInt(e.target.value))}
                />
            </label>
            <label>
                Kunci b :
                <input
                    type="number"
                    value={keyB}
                    onChange={(e) => setKeyB(parseInt(e.target.value))}
                />
            </label>
            <p>Plaintext: </p>
            <textarea
                placeholder="Masukan plaintext nya disini..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <div className="btn-container">
                <button className="btn-enkripsi" onClick={handleEnkripsi}>Enkripsi</button>
                <button className="btn-deskripsi" onClick={handleDeskripsi}>Deskripsi</button>
                <button className="btn-clear" onClick={handleClear}>Clear</button>
            </div>
            <div className="output">
                {outputEnkripsi && (
                    <>
                        <strong>Hasil Enkripsi:</strong>
                        <div className="output-item">
                            <textarea value={outputEnkripsi} readOnly />
                            {outputEnkripsi.startsWith('Error') && <div className="error">{outputEnkripsi}</div>}
                        </div>
                    </>
                )}
                {outputDeskripsi && (
                    <>
                        <strong>Hasil Deskripsi :</strong>
                        <div className="output-item">
                            <textarea value={outputDeskripsi} readOnly />
                            {outputDeskripsi.startsWith('Error') && <div className="error">{outputDeskripsi}</div>}
                        </div>
                    </>
                )}
            </div>
        </div>
        </>
    );
};

export default CalculatorAffine;
