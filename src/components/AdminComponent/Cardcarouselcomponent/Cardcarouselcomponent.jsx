import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Imagemevalidacaocomponent } from '../Imagemevalidacaocomponent/Imagemevalidacaocomponent';
import './Cardcarouselcomponent.css'

export function MultipleCarousels() {
  const { register, handleSubmit } = useForm();
  const [carousels, setCarousels] = useState([{ id: Date.now(), cards: [{ id: Date.now() }] }]);

  const addNewCardToCarousel = (carouselIndex) => {
    const newCarousels = [...carousels];
    newCarousels[carouselIndex].cards.push({ id: Date.now() });
    setCarousels(newCarousels);
  };


  const removeCardFromCarousel = (carouselIndex, cardId) => {
    const newCarousels = [...carousels];
    newCarousels[carouselIndex].cards = newCarousels[carouselIndex].cards.filter((card) => card.id !== cardId);
    setCarousels(newCarousels);
  };

  const onSubmit = (data) => {
    console.log('Formulário enviado:', data);
  };

  return (
    <>
      {carousels.map((carousel, carouselIndex) => (
        <div key={carousel.id} className='carousel-container'>
          {carousel.cards.map((card, cardIndex) => (
            
            <div key={card.id} className='input_admin'>
            <h2 className='admin_titulo_input'>Card {cardIndex + 1}</h2>
              <label htmlFor={`carousel_${carouselIndex}_card_${cardIndex}_titulo_video`}>Título</label>
              <input
                type="text"
                className='MultipleCarouseus_titulo'
                {...register(`carousels[${carouselIndex}].cards[${cardIndex}].titulo_video`)}
                id={`carousel_${carouselIndex}_card_${cardIndex}_titulo_video`}
                name={`carousel_${carouselIndex}_card_${cardIndex}_titulo_video`}
                maxLength={60}
                minLength={5}
                required
                placeholder='Digite o Título do card'
              />

              <label htmlFor={`carousel_${carouselIndex}_card_${cardIndex}_subtitulo_video`}>Subtítulo</label>
              <input
                type="text"
                className='MultipleCarouseus_subtitulo'
                {...register(`carousels[${carouselIndex}].cards[${cardIndex}].subtitulo_video`)}
                id={`carousel_${carouselIndex}_card_${cardIndex}_subtitulo_video`}
                name={`carousel_${carouselIndex}_card_${cardIndex}_titulo_video`}
                maxLength={100}
                minLength={10}
                required
                placeholder='Digite o Subtítulo do card'
              />

              <label htmlFor={`carousel_${carouselIndex}_card_${cardIndex}_conteudo_video`}>Conteúdo</label>
              <input
                type="text"
                className='MultipleCarouseus_conteudo'
                {...register(`carousels[${carouselIndex}].cards[${cardIndex}].conteudo_video`)}
                id={`carousel_${carouselIndex}_card_${cardIndex}_conteudo_video`}
                name={`carousel_${carouselIndex}_card_${cardIndex}_titulo_video`}
                maxLength={100}
                minLength={8}
                required
                placeholder='Digite o Conteúdo do card'
              />

              <label htmlFor={`carousel_${carouselIndex}_card_${cardIndex}_link_video_1`}>Link Externo 1</label>
              <input
                className='MultipleCarouseus_links'
                type="URL"
                {...register(`carousels[${carouselIndex}].cards[${cardIndex}].link_video_1`)}
                id={`carousel_${carouselIndex}_card_${cardIndex}_link_video_1`}
                name={`carousel_${carouselIndex}_card_${cardIndex}_titulo_video`}
                maxLength={600}
                required
                placeholder='Cole o link externo 1'
              />

              <label htmlFor={`carousel_${carouselIndex}_card_${cardIndex}_link_video_2`}>Link Externo 2</label>
              <input
                className='MultipleCarouseus_links'
                type="URL"
                {...register(`carousels[${carouselIndex}].cards[${cardIndex}].link_video_2`)}
                id={`carousel_${carouselIndex}_card_${cardIndex}_link_video_2`}
                name={`carousel_${carouselIndex}_card_${cardIndex}_titulo_video`}
                maxLength={600}
                required
                placeholder='Cole o link externo 2'
              />

              <label htmlFor={`carousel_${carouselIndex}_card_${cardIndex}_link_video_3`}>Link Externo 3</label>
              <input
                className='MultipleCarouseus_links'
                type="URL"
                {...register(`carousels[${carouselIndex}].cards[${cardIndex}].link_video_3`)}
                id={`carousel_${carouselIndex}_card_${cardIndex}_link_video_3`}
                name={`carousel_${carouselIndex}_card_${cardIndex}_titulo_video`}
                maxLength={600}
                required
                placeholder='Cole o link externo 3'
              />

              <h3 className='admin_titulo_input'>Escolha a imagem do seu card</h3>
              <label htmlFor={`cards_carrossel_${carouselIndex}_${cardIndex}`} className="custom-file-upload">
                <span className="plus-icon">+</span> Escolher imagem
              <Imagemevalidacaocomponent
                {...register(`carousels[${carouselIndex}].cards[${cardIndex}].cards_carrossel`)}
                name={`cards_carrossel_${carouselIndex}_${cardIndex}`}
                nome={`cards_carrossel_${carouselIndex}_${cardIndex}`}
                MensagemdeErro={'As imagens devem ter ao menos 250 x 250 pixels de resolução'}
                minWidth={250}
                minHeight={250}
                multiple={true}
                minImages={1}
                maxImages={1}
              />
              </label>

              <button type="button" className='button-carousel-remover' onClick={() => removeCardFromCarousel(carouselIndex, card.id)}>
                - Remover Card
              </button>
            </div>
          ))}

          <button type="button" className='button-carousel-adicionar' onClick={() => addNewCardToCarousel(carouselIndex)}>
            + Adicionar Novo Card
          </button>

        </div>
      ))}

    </>
  );
}
