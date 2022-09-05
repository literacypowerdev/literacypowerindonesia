
const SlickArrowLeft = ({ currentSlide, slideCount, style, ...props }: any) => (
    <img src="/icon/arrow-down.svg" alt="prevArrow" {...props} style=
        {{
            ...style, display: "block", transform: 'rotate(90deg)', position: 'absolute', left: '-10px', zIndex: '20', top: '45%'
        }}
    />
);

const SlickArrowRight = ({ currentSlide, slideCount, style, ...props }: any) => (
    <img src="/icon/arrow-down.svg" alt="prevArrow" {...props} style=
    {{
        ...style, display: "block", transform: 'rotate(270deg)', position: 'absolute', right: '-10px', zIndex: '20', top: '45%'
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
    appendDots: (dots: any) => {
		return <ul style={{ margin: '0px', }}>{dots}</ul>;
	},
	customPaging: (i: any) => {
		const style = {
			width: 8,
			height: 8,
			display: 'inline-block',
			backgroundSize: 'contain',
			backgroundRepeat: 'no-repeat',
		};
		return <a className="slick-dot bg-[#E08A59] rounded-full" style={style} />;
	},
    
      
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
