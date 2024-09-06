import React, { useState } from 'react';
import axios from 'axios';

export function FormSubmit({ valores, imageEndpoint, textEndpoint, baseUrl, children, onSuccess, onError }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        console.log(valores)

        // Captura os dados do formulário
        const formData = new FormData(event.target);


        // Console log para verificar os dados do FormData
        console.log('Todos os dados do FormData:');
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        const imageFiles = {};
        const textFields = {};

        // Itera sobre o FormData e separa imagens e textos
        for (let [key, value] of formData.entries()) {
            if (value instanceof File && value.size > 0) {
                imageFiles[key] = value;
            } else {
                textFields[key] = value;
            }
        }

        // Console log para verificar os dados separados
        console.log('Dados de texto:', textFields);
        console.log('Dados de imagem:', imageFiles);

        try {
            // Envia dados de texto se houver
            if (Object.keys(textFields).length > 0) {
                await axios.post(baseUrl + textEndpoint, textFields, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                console.log('Dados de texto enviados com sucesso');
            }

            // Envia dados de imagem se houver
            if (Object.keys(imageFiles).length > 0) {
                const imageFormData = new FormData();
                for (let key in imageFiles) {
                    imageFormData.append(key, imageFiles[key]);
                }

                await axios.post(baseUrl + imageEndpoint, imageFormData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log('Dados de imagem enviados com sucesso');
            }

            setLoading(false);
            if (onSuccess) {
                onSuccess();
            }
        } catch (err) {
            console.error('Erro ao enviar dados:', err);
            setLoading(false);
            setError(err);
            if (onError) {
                onError(err);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {children}
            <button className='button_enviardados' type="submit" disabled={loading}>
                {loading ? 'Enviando...' : 'Enviar'}
            </button>
            {error && <p style={{ color: 'red' }}>Erro: {error.message}</p>}
        </form>
    );
}
