import React, { FC } from "react";
import { Row, Col, Divider, Badge, Avatar } from "antd";
import {
  AppleOutlined,
  PlusOutlined,
  GiftOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  StyledHeader,
  TitleH2,
  StyledSearch,
  StyledButton,
  StyledRightRow,
} from "./header.styled";

export const HeaderComponent: FC = () => {
  const onSearch = (value: string) => console.log(value);

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
            <StyledSearch placeholder="Search" onSearch={onSearch} />
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
