import React from 'react';
import styled from 'styled-components';
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Account1 from './Account1';
import Account2 from './Account2';
import Account3 from './Account3';

SwiperCore.use([EffectCoverflow, Pagination]);

export default function CheckProfit() {
  return (
    <StyledLogContainer>
    <StyledScrollArea>
    <StyledCheck>
      <StyledTop className="Top">
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
            <div className="Account1">
              <Account1 />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Account2">
              <Account2 />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Account3">
             <Account3/>
              </div>
          </SwiperSlide>
        </StyledSwiper>
      </StyledTop>
      
      <StyledBottom>
        Bottom Graph
      </StyledBottom>

      </StyledCheck>
      </StyledScrollArea>
    </StyledLogContainer>
  );
};

const StyledScrollArea = styled.div`
  overflow: scroll;
  height: 95%;
`;

const StyledLogContainer = styled.div`
  height: 90vh;
`;

const StyledTop = styled.div`
  flex-grow : 1;
  width: 95%;
  border: solid 1px #b8a88e;
  border-radius: 10px;
  background-color: black;
  margin: 10px auto;
  
`;

const StyledSwiper = styled(Swiper)`
  padding-top: 10px;
  color: white;
  height: 100%;
`;

const StyledCheck = styled.div``;

const StyledBottom = styled.div`
height: 45vh;
width: 95%;
border: solid 1px #b8a88e;
border-radius: 10px;
background-color: black;
margin: 10px auto;
`;