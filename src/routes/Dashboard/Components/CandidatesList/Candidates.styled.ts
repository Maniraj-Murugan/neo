import styled from "styled-components";
import { Row, Typography } from "antd";

const { Title } = Typography;

export const ColumnContainer = styled.div<{ isDragging?: boolean }>`
  margin: 10px 15px;
  border-radius: 2px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
`;
export const ColumnTitle = styled.h3`
  padding: 8px;
  background-color: #fff;
  border-left: 3px solid lightgrey;
`;
export const ColumnCandidateList = styled.div`
  padding: 10px 0px;
`;

export const CandidateContainer = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0 4px 6px -2px rgb(0 0 0 / 5%);
  border-width: 2px;
  border-color: #edf2f7;
`;

export const StyledUserName = styled(Title).attrs({
  level: 5,
})`
  color: #003a8c !important;
  .anticon-usergroup-add {
    color: #cf1322;
    padding-left: 5px;
  }
`;

export const StyledUserCompany = styled(Title).attrs({
  level: 5,
})`
  margin-top: 0 !important;
`;

export const StyledRatingSection = styled(Row)`
  background-color: #fafafa;
  .ant-rate {
    font-size: 15px;
  }
  .ant-col {
    display: flex;
    align-items: center;
  }
  .anticon-ellipsis {
    font-size: 20px;
    margin-left: 5px;
    transform: rotate(90deg);
  }
  padding: 5px 0px;
`;

export const StyledDragDropRow = styled(Row)`
  overflow-x: auto;
  white-space: nowrap;
  flex-flow: row;
`;

export const StyledDiv = styled.div`
  display: flex;
`;
