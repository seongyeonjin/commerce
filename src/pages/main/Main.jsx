import { MainWrap, VisualWrap } from './MainStyle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useSelector } from "react-redux";
import CartList from "../../components/cart/CartList";
import 'swiper/css';
import 'swiper/css/autoplay';
const Main = () => {
    const {cartData} = useSelector(state=> state.cart)
    return (
        <>
            <VisualWrap>
                <Swiper modules={[Autoplay]} spaceBetween={0} slidesPerView={1} autoplay={{ delay: 5000, disableOnInteraction: false }} loop={true} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
                    <SwiperSlide>
                        <img src="./images/visual3.gif" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./images/visual1.jpeg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./images/visual2.jpeg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./images/visual4.jpeg" alt="" />
                    </SwiperSlide>
                </Swiper>
            </VisualWrap>
            <MainWrap className="main">
                <div className="inner">
                    <h2>아뜨랑스는</h2>
                    <div className="attrangs">
                        <p>화면너머의 여러분에게 따뜻한 쇼핑메이트이고 싶습니다.</p>
                        <p>일상에 스며드는 실용적인 옷들부터</p>
                        <p>가장 빛이 나야하는 순간까지 언제나 함께 하겠습니다.</p>
                    </div>
                </div>
            </MainWrap>
        </>
    );
};

export default Main;
