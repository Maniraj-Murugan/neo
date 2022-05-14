import React, { FC } from "react";
import { Col, Select } from "antd";
import {
  FilterOutlined,
  UploadOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { StyledHeaderWrapper } from "./Header.styled";

const { Option } = Select;

export const ListHeaderComponent: FC = () => {
  return (
    <StyledHeaderWrapper align="middle" justify="space-between">
      <Col>
        All Candidates -
        <Select defaultValue="0">
          <Option value="0">Active (48)</Option>
        </Select>
      </Col>
      <Col>
        Sorty by
        <Select defaultValue="0">
          <Option value="0">Last Updated</Option>
        </Select>
      </Col>
      <Col>
        <MenuFoldOutlined />
        <FilterOutlined />
        <UploadOutlined />
      </Col>
    </StyledHeaderWrapper>
  );
};

export const ListHeader = React.memo(ListHeaderComponent);
