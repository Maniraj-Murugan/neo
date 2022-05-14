import React, { FC } from "react";
import { Row, Col, Breadcrumb, Button, Select } from "antd";
import {
  FolderAddOutlined,
  RadarChartOutlined,
  DownOutlined,
} from "@ant-design/icons";
import {
  StyledHeader,
  StyledButton,
  StyledRightRow,
} from "../Header/header.styled";

const { Option } = Select;

export const SeondaryHeaderComponent: FC = () => {
  return (
    <StyledHeader>
      <Row align="middle" justify="space-between">
        <Col>
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <FolderAddOutlined />
              Jobs
            </Breadcrumb.Item>
            <Breadcrumb.Item>Full Stack Engineer</Breadcrumb.Item>
            <Button size="small">View Job Details</Button>
          </Breadcrumb>
        </Col>
        <Col>
          <StyledRightRow align="middle">
            <Select defaultValue="0">
              <Option value="0">Add Candidate</Option>
            </Select>
            <StyledButton icon={<RadarChartOutlined />} shape="round">
              Published
              <DownOutlined />
            </StyledButton>
          </StyledRightRow>
        </Col>
      </Row>
    </StyledHeader>
  );
};

export const SecondaryHeader = React.memo(SeondaryHeaderComponent);
