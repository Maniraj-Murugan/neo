import styled from "styled-components";
import { Layout as AntLayout, Typography, Input, Button, Row } from "antd";
import { colors } from "ui/elements";

const { Header: AntHeader } = AntLayout;

const { Title } = Typography;

export const StyledHeader = styled(AntHeader)`
  min-height: "56px";
  height: auto;
  line-height: "56px";
  padding: 10px 24px;
  background-color: #fff;
  h2 {
    margin: 0;
  }
  .anticon-apple {
    font-size: 40px;
  }
  .ant-breadcrumb {
    font-size: 15px;
  }
  .anticon-folder-add {
    font-size: 20px;
    padding-right: 10px;
  }
`;

export const TitleH2 = styled(Title).attrs({
  level: 2,
})`
  padding-left: 20px;
`;

export const StyledSearch = styled(Input)`
  width: 220px;
  border: 0px;
  border-bottom: 2px solid lightgrey;
  &:hover,
  &:focus {
    border-color: lightgrey;
    box-shadow: none;
    border-right-width: 0px;
    outline: 0;
  }
`;

export const StyledButton = styled(Button)`
  background-color: ${colors.primary};
  color: #fff;
  margin-left: 20px;
`;

export const StyledRightRow = styled(Row)`
  .anticon-gift {
    font-size: 25px;
  }
`;
