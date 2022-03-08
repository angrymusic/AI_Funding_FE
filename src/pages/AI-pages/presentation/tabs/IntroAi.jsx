import React from 'react';
import styled from 'styled-components';
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Intro1 from './AI-intros/intro1';
import Intro2 from './AI-intros/intro2';

SwiperCore.use([EffectCoverflow, Pagination]);

const App = () => {
  return (
    <StyledScrollArea>
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
            <StyledSwiperContent className="intro1">
              <Intro1 />
              page 1
            </StyledSwiperContent>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSwiperContent className="intro2">
              <Intro2 />
              page 2
            </StyledSwiperContent>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSwiperContent className="intro3">page 3</StyledSwiperContent>
          </SwiperSlide>
        </StyledSwiper>
      </StyledContainer>
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

const StyledSwiperContent = styled.div`
  margin-top: 10px;
`;
