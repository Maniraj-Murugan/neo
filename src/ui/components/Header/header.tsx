import React, { FC } from "react";
import { Row, Col, Divider, Badge, Avatar } from "antd";
import {
  AppleOutlined,
  PlusOutlined,
  GiftOutlined,
  UserOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import {
  StyledHeader,
  TitleH2,
  StyledSearch,
  StyledButton,
  StyledRightRow,
} from "./header.styled";

export interface HeaderProps {
  getSearchText?: (text: string) => void;
}

export const HeaderComponent: FC<HeaderProps> = ({ getSearchText }) => {
  const onSearch = (e: any) => {
    const { value } = e.target;
    if (getSearchText) {
      getSearchText(value);
    }
  };

  return (
    <StyledHeader>
      <Row align="middle" justify="space-between">
        <Col>
          <Row align="middle">
            <AppleOutlined />
            <TitleH2>iamneo.ai Talent Center</TitleH2>
          </Row>
        </Col>
        <Col>
          <StyledRightRow align="middle">
            <StyledSearch
              placeholder="Search"
              onChange={onSearch}
              prefix={<SearchOutlined />}
            />
            <StyledButton icon={<PlusOutlined />} shape="round">
              Add New
            </StyledButton>
            <Divider type="vertical" />
            <Badge count={1}>
              <GiftOutlined />
            </Badge>
            <Avatar
              style={{ backgroundColor: "#87d068", marginLeft: "20px" }}
              icon={<UserOutlined />}
            />
          </StyledRightRow>
        </Col>
      </Row>
    </StyledHeader>
  );
};

export const Header = React.memo(HeaderComponent);
