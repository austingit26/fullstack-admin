import {
  GridColumnMenuContainer,
  GridColumnMenuFilterItem,
  GridColumnMenuHideItem,
} from "@mui/x-data-grid";

const CustomColumnMenu = ({ colDef }) => {
  return (
    <GridColumnMenuContainer>
      <GridColumnMenuHideItem colDef={colDef} />
    </GridColumnMenuContainer>
  );
};

export default CustomColumnMenu;
