import './Imagemevalidacaocomponent.css';
import { useState } from 'react';

export function Imagemevalidacaocomponent({ nome, MensagemdeErro, minWidth, minHeight, multiple, minImages, maxImages }) {
    const [errorMessage, setErrorMessage] = useState(''); // Mensagem de erro para a imagem

    const validateImageSize = (file) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                if (img.width < minWidth || img.height < minHeight) {
                    reject(MensagemdeErro); // Mensagem de erro como string
                } else {
                    resolve();
                }
            };
            img.onerror = () => reject('Erro ao carregar a imagem.');
            img.src = URL.createObjectURL(file);
        });
    };

    const handleImageChange = async (event) => {
        const files = event.target.files;

        // Verifica se o número de imagens é menor que o mínimo permitido
        if (files.length < (minImages || 0)) {
            setErrorMessage(`Você deve enviar pelo menos ${minImages} imagem(ns).`);
            return;
        }

        // Verifica se o número de imagens é maior que o máximo permitido
        if (files.length > (maxImages || Infinity)) {
            setErrorMessage(`Você pode enviar no máximo ${maxImages} imagem(ns).`);
            return;
        }

        for (const file of files) {
            try {
                await validateImageSize(file);
                setErrorMessage(''); // Limpa a mensagem de erro se a imagem for válida
            } catch (error) {
                setErrorMessage(error); // Define a mensagem de erro se a imagem não for válida
                break;
            }
        }
    };

    return (
        <div className='image-validation-container'>
            <input
                className='custom-file-upload_papeldeparede'
                type="file"
                id={nome}
                name={nome}
                accept=".jpg, .jpeg, .png"
                required
                onChange={handleImageChange}
                multiple={multiple}
            />
            {errorMessage && <p className='error-message'>{errorMessage}</p>}
        </div>
    );
}
