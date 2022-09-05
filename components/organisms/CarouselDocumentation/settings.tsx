
const SlickArrowLeft = ({ currentSlide, slideCount, style, ...props }: any) => (
    <img src="/icon/arrow-down.svg" alt="prevArrow" {...props} style=
        {{
            ...style, display: "block", transform: 'rotate(90deg)', position: 'absolute', left: '50px', zIndex: '20'
        }}
    />
);

const SlickArrowRight = ({ currentSlide, slideCount, style, ...props }: any) => (
    <img src="/icon/arrow-down.svg" alt="prevArrow" {...props} style=
    {{
        ...style, display: "block", transform: 'rotate(270deg)', position: 'absolute', right: '50px', zIndex: '20'
    }}
    />
);


export const settingsSlick = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    swipeToSlide: true,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,

            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,

            }
        }
    ]
};
