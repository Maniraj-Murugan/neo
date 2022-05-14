import { CandidateLayoutProps } from "api/mocks/Candidatelist";

export const dragState = (
  destination: {
    droppableId: string;
    index: number;
  } | undefined,
  source: {
    droppableId: string;
    index: number;
  },
  draggableId: string,
  type: string,
  candidateListData: CandidateLayoutProps,
  setCandidateListData: React.Dispatch<
    React.SetStateAction<CandidateLayoutProps>
  >
) => {
  if (!destination) {
    return;
  }
  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  ) {
    return;
  }

  if (type === "column") {
    const newColOrd = Array.from(candidateListData.columnOrder);
    newColOrd.splice(source.index, 1);
    newColOrd.splice(destination.index, 0, draggableId);

    const newState = {
      ...candidateListData,
      columnOrder: newColOrd,
    };
    setCandidateListData(newState);
  }

  const startcol = candidateListData.columns[source.droppableId];
  const endcol = candidateListData.columns[destination.droppableId];

  if (startcol === endcol) {
    const candidates = Array.from(startcol.candidateIds);
    candidates.splice(source.index, 1);
    candidates.splice(destination.index, 0, draggableId);

    const newCol = {
      ...startcol,
      candidateIds: candidates,
    };

    const newState = {
      ...candidateListData,
      columns: {
        ...candidateListData.columns,
        [newCol.id]: newCol,
      },
    };

    setCandidateListData(newState);
    return;
  }
  const startcandidateIds = Array.from(startcol.candidateIds);
  startcandidateIds.splice(source.index, 1);
  const newStart = {
    ...startcol,
    candidateIds: startcandidateIds,
  };
  const endcandidateIds = Array.from(endcol.candidateIds);
  endcandidateIds.splice(destination.index, 0, draggableId);
  const newEnd = {
    ...endcol,
    candidateIds: endcandidateIds,
  };
  const newState = {
    ...candidateListData,
    columns: {
      ...candidateListData.columns,
      [newStart.id]: newStart,
      [newEnd.id]: newEnd,
    },
  };
  setCandidateListData(newState);
};
