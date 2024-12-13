import React from 'react';
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useAutoplay } from './EmblaCarouselAutoplay'
import {
    NextButton,
    PrevButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons'

type PropType = {
    slides: number[]
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        Autoplay({ playOnInit: false, delay: 3000 })
    ])

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } =
        useAutoplay(emblaApi)

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((image,index) => (
                        <div className="embla__slide" key={index}>
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="object-cover w-full h-full"
                            />
                            <div className="embla__slide__number">
                                <span>{index + 1}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton
                        onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
                        disabled={prevBtnDisabled}
                    />
                    <NextButton
                        onClick={() => onAutoplayButtonClick(onNextButtonClick)}
                        disabled={nextBtnDisabled}
                    />
                </div>

                <button className="embla__play" onClick={toggleAutoplay} type="button">
                    {autoplayIsPlaying ? 'Stop' : 'Start'}
                </button>
            </div>
        </div>
    )
}

export default EmblaCarousel
