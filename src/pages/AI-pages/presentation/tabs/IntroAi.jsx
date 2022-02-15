import React from 'react';
import styled from 'styled-components';
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper.min.css';
import Intro1 from './AI-intros/intro1';
import Intro2 from './AI-intros/intro2';

SwiperCore.use([EffectCoverflow, Pagination]);

const App = () => {
  return (
    <StyledScrollArea className="ScrollArea">
      <StyledContainer className="Container">
        <StyledSwiper
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          pagination={{
            clickable: true,
            type: 'bullets',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            bulletClass: 'swiper-pagination-bullet-custom swiper-pagination-bullet',
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="intro1">
              <Intro1 />
              page 1
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="intro2">
              <Intro2 />
              page 2
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="intro3">page 3</div>
          </SwiperSlide>
        </StyledSwiper>
      </StyledContainer>
      <div
        className="scrollareacheck"
        style={{ background: 'red', height: '300px', marginTop: '5px' }}
      >
        SCROLL_AREA_CHECK
      </div>
    </StyledScrollArea>
  );
};

export default App;

const StyledContainer = styled.div`
  height: 500px;
  width: 95vw;
  background: black;
  border-radius: 5px;
  margin: 10px auto;
`;
const StyledSwiper = styled(Swiper)`
  color: white;
  height: 100%;
  margin: 10px;
`;
const StyledScrollArea = styled.div`
  overflow: scroll;
  height: 85vh;
`;
