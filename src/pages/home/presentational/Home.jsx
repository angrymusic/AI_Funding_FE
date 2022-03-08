import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";

/*슬라이드 라이브러리*/
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";

/*페이지*/
import MyAccount from "./MyAccount";
import Stocks from "./Stocks";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Home() {
  const [accountNumber, setAccountNumber] = useState(0);
  const [data, setData] = useState("default");
	const [accounts, setAccounts] = useState([]);
  const [stock, setStock] = useState([]);

	/*초기 마운트*/
  useEffect(() => {
    axios
      .post('http://ec2-13-209-73-79.ap-northeast-2.compute.amazonaws.com:8080/api/home', {
        customer_info_id: 1,
        login_type: '00',
      })
      .then((res) => {
        setData(res.data);
        setAccounts(res.data.accounts);
        setStock(res.data.accounts[accountNumber].stocks);
      })
      .catch((err) => {
        console.log('에러');
      });
  }, []);

	/*계좌 변화시*/
	const mounted = useRef(false);
	useEffect(() => {
		if(!mounted.current){
			mounted.current = true;
		} else {
			setStock(accounts[accountNumber].stocks)
		}
	}, [accountNumber])

	const myAccountSlide = accounts.map((list, index) => (
		<SwiperSlide key={index}>
			<MyAccount
				name={data.nickname}
        accountName={list.nickname}
				startDay={list.createAt}
        money={list.balance}
        todayIncome={list.todayIncome}
        todayProfit={list.todayProfit}
        totalIncome={list.totalIncome}
        totalProfit={list.totalProfit}>
			</MyAccount>
		</SwiperSlide>
	))

  return (
    <HomeStyle>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
          type: "bullets",
          bulletClass:
            "swiper-pagination-bullet swiper-pagination-bullet-custom",
        }}
        onSlideChange={(e) => {
          setAccountNumber(e.activeIndex);
        }}
      >
        {myAccountSlide}
      </Swiper>

      <Stocks stock={stock} account={accountNumber}></Stocks>
    </HomeStyle>
  );
}

const HomeStyle = styled.div`
  flex-grow: 1;
  padding: 10px;
`;
