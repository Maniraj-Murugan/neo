import React, { FC, useState } from "react";
import candidateData from "api/mocks/Candidatelist";
import { Column } from "./Column";
import { DragDropContext } from "react-beautiful-dnd";
import { dragState } from "../helper";
import { StyledDragDropRow } from "./Candidates.styled";

export interface ListProps {
  searchUserName?: string;
}

export const CandidatesList: FC<ListProps> = ({ searchUserName }) => {
  const [candidateListData, setCandidateListData] = useState(candidateData);

  return (
    <StyledDragDropRow>
      <DragDropContext
        onDragEnd={({ destination, source, draggableId, type }) =>
          dragState(
            destination,
            source,
            draggableId,
            type,
            candidateListData,
            setCandidateListData
          )
        }
      >
        {candidateListData.columnOrder.map((columnId) => {
          const column = candidateListData.columns[columnId];
          const candidates = column.candidateIds.map(
            (candidateId) => candidateListData.candidates[candidateId]
          );

          const candidatesList = searchUserName
            ? candidates.filter((item) =>
                item.candidateName
                  .toLowerCase()
                  .includes(searchUserName.toLowerCase())
              )
            : candidates;

          return (
            <Column
              key={column.id}
              column={column}
              candidates={candidatesList}
            />
          );
        })}
      </DragDropContext>
    </StyledDragDropRow>
  );
};
