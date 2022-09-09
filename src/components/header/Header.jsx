import React from 'react';
import styled from 'styled-components';
import { useState, useSelector } from 'react-redux';

import Grid from "../../elements/Grid";

const Header = (props) => {
  return (
    <>
      <Grid width = "1050" margin = "0 auto">
        <HeaderWrap>
          <img
              style={{ cursor: "pointer" }}
              src="https://res.kurly.com/pc/service/common/2011/delivery_210801.png"
              width="121px"
              height="22px"
              alt="서울, 경기, 인천 샛별배송, 수도권 이외 지역 택배배송"
            />
          <HeaderMenu>
            <li>
              회원가입
            </li>
            <li>
              로그인
            </li>
            <li>
              고객센터
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
                />
              </h1>
            </Logo>
          </Grid>
      </Grid>
    </>
  );
};

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
export default Header;