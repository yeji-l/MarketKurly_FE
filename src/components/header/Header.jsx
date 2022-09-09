import React from "react";
import Grid from "../../elements/Grid";
import styled from "styled-components";
import { useNavigate } from "react-router";
import HoverList from "./HoverList";


const Header = (props) => {
    const navigate = useNavigate();
    const onMoveMain = () => {
        navigate("/")
    }
    const onMoveSignUp = () => {
        navigate("/signup");
      };
    const onMoveLogin = () => {
        navigate("/login");
      };
    
    
    return (
        
        // 로그아웃 상태일시 화면
        <>
        <Grid width="1050px" margin="0 auto">
          <HeaderWrap>
            <img
              style={{ cursor: "pointer" }}
              src="https://res.kurly.com/pc/service/common/2011/delivery_210801.png"
              width="121px"
              height="22px"
              alt="서울, 경기, 인천 샛별배송, 수도권 이외 지역 택배배송"
            />
            <HeaderMenu>
              <li className="menu signup" onClick={onMoveSignUp}>
                회원가입
              </li>
              <li className="menu" onClick={onMoveLogin}>
                로그인
              </li>
              <li className="cs">
                고객센터
                <HoverList />
              </li>
            </HeaderMenu>
          </HeaderWrap>

          <Grid height="63px" position="relative">
            <Logo>
              <h1>
                <img
                  style={{ cursor: "pointer" }}
                  src="https://res.kurly.com/images/marketkurly/logo/logo_x2.png"
                  width="103px"
                  height="79px"
                  alt="마켓컬리 로고"
                  onClick={onMoveMain}
                />
              </h1>
            </Logo>
          </Grid>
        </Grid>
        <Container>
        <Gnb>
          <GnbMenu>
            <li className="all-categoty menu1">전체 카테고리</li>
            <li className="menu2">신상품</li>
            <li className="menu3">베스트</li>
            <li className="menu4">알뜰쇼핑</li>
            <li className="menu5">특가/혜택</li>
          </GnbMenu>
          <Grid position="relative">
            <GnbInput
              
              placeholder="검색어를 입력해주세요."
            />
            <GnbInputClick
              /* onClick={searchItem} */
              src="https://res.kurly.com/pc/service/common/1908/ico_search_x2.png"
              width="30px"
              height="30px"
              alt="마켓컬리 검색창 돋보기"
            />
          </Grid>
              
            <Icons className="location" />
            <Icons className="pick" />
            <Icons className="cart" /* onClick={onMoveCart} */ />
            {/*  {cart_list.length ? (
                <CartItemNum>{cart_list.length}</CartItemNum>
            ) : (
                ""
            )} */}
         
        </Gnb>
        <Shadow />
      </Container>
      </>
    )    
}

export default Header;

const HeaderWrap = styled.div`
  position: relative;
  z-index: 300;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  font-family: "Noto Sans";
  letter-spacing: -0.3px;
`;

const HeaderMenu = styled.ul`
  display: flex;
  font-size: 12px;
  font-family: "Noto Sans";
  position: relative;
  & li {
    padding: 0 12px;
    cursor: pointer;
    list-style: none;
    position: relative;
    line-height: 37px;
    &.menu:before {
      content: "";
      float: right;
      width: 1px;
      height: 13px;
      position: relative;
      top: 12px;
      left: 12px;
      background-color: #d8d8d8;
    }
    &.cs {
      padding: 0 17px 0 12px;
    }
    &.cs:before {
      content: "";
      position: absolute;
      right: 5px;
      top: 18px;
      width: 8px;
      height: 5px;
      background: url("https://res.kurly.com/pc/ico/1908/ico_down_8x5.png")
        no-repeat 0 0;
    }
    &.signup {
      color: #5f0080;
    }
    &.cs:hover * {
      display: block;
    }
  }
`;

const Logo = styled.div`
  width: 100%;
  & h1 {
    user-select: none;
    bottom: -6px;
    position: absolute;
    font-size: 2em;
    text-align: center;
    width: 100%;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: sticky;
  z-index: 200;
  top: 0;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

const Gnb = styled.div`
  width: 1150px;
  margin: 0 auto;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  padding: 9px 0 8px 0;
  justify-content: space-between;
  background-color: #ffffff;
  letter-spacing: -0.3px;
`;

const GnbMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  font-size: 16px;
  color: #333;
  line-height: 20px;
  text-align: center;
  font-family: "Noto Sans";
  & li {
    list-style: none;
    cursor: pointer;
    font-weight: 500;
    &:hover {
      color: #5f0081;
    }
    &.menu1 {
      width: 148px;
    }
    &.menu2,
    &.menu4 {
      width: 124px;
    }
    &.menu3,
    &.menu5 {
      width: 116px;
    }
  }
  & .all-categoty:before {
    content: url("https://res.kurly.com/pc/service/common/1908/ico_gnb_all_off.png");
    position: relative;
    width: 16px;
    height: 14px;
    top: 1px;
    left: -16px;
  }
  & .all-categoty:hover:before {
    content: url("https://res.kurly.com/pc/service/common/1908/ico_gnb_all.png");
    position: relative;
    width: 16px;
    height: 14px;
    top: 1px;
    left: -16px;
  }
`;

const GnbInput = styled.input`
  width: 242px;
  height: 36px;
  padding: 0 60px 0 14px;
  border: 1px solid #f7f7f6;
  border-radius: 18px;
  background-color: #f7f7f7;
  font-family: "Noto Sans";
  font-weight: 400;
  font-size: 12px;
  color: #666;
  line-height: 16px;
  outline: none;
  &::placeholder {
    letter-spacing: -0.05em;
    font-weight: bold;
    color: lightgray;
  }
`;

const GnbInputClick = styled.img`
  position: absolute;
  right: 5px;
  top: 3px;
  cursor: pointer;
`;

const Icons = styled.span`
  width: 30px;
  height: 30px;
  cursor: pointer;
  &.location {
    background: url("https://res.kurly.com/pc/ico/2008/ico_delivery_setting.svg?ver=1")
      no-repeat 50% 50%;
    &:hover {
      background: url("https://res.kurly.com/pc/ico/2010/ico_delivery_setting_on.svg")
        no-repeat 50% 50%;
    }
  }
  &.pick {
    background: url("https://res.kurly.com/pc/service/pick/btn-heart-off.svg")
      no-repeat 50% 50%;
    &:hover {
      background: url("https://res.kurly.com/pc/service/pick/btn-heart-hover.svg")
        no-repeat 50% 50%;
    }
  }
  &.cart {
    background: url("https://res.kurly.com/pc/service/common/2011/ico_cart.svg")
      no-repeat 50% 50%;
    &:hover {
      background: url("https://res.kurly.com/pc/service/common/2011/ico_cart_on.svg?v=1")
        no-repeat 50% 50%;
    }
  }
`;

const Shadow = styled.div`
  position: absolute;
  z-index: 200;
  left: 0;
  top: 53px;
  width: 100%;
  height: 9px;
  background: url('https://res.kurly.com/pc/service/common/1902/bg_1x9.png')
    repeat-x 0 100%;
`;