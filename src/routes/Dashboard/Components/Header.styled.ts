import { Row } from "antd";
import styled from "styled-components";

export const StyledHeaderWrapper = styled(Row)`
  .ant-col {
    font-weight: bold;
  }
  margin: 10px 15px;
  .ant-select{
      width: 150px;
  }
  .ant-select-selector {
    background-color: transparent !important;
    border: 0 !important;
  }
  .anticon {
    font-size: 20px;
    padding 5px 15px;
  }
`;
