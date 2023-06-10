import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Skeleton } from "@mui/material";
import UpdateBtn from "../Buttons/UpdateBtn";
import DetailsBtn from "../Buttons/DetailsBtn";
import ConfirmDialog from "../ConfirmDialog/ConfirmDialog";
import { useMainContext } from "../../context/MainContext";

// Custom styled table cell for header and body
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

// Custom styled table row
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ContactsTable = ({ ContactsData, isLoading }) => {
  const { setCurrentContact } = useMainContext();

  return (
    <TableContainer sx={{ maxHeight: 1600 }} component={Paper}>
      <Table stickyHeader sx={{ minWidth: 700 }} aria-label="customized table">
        {/* Table header */}
        <TableHead>
          <TableRow>
            <StyledTableCell>First Name</StyledTableCell>
            <StyledTableCell align="right">Last Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Phone</StyledTableCell>
            <StyledTableCell align="center"> Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        {/* Table body */}
        <TableBody>
          {ContactsData?.map((item) => (
            <StyledTableRow key={item?.id}>
              <StyledTableCell component="th" scope="row">
                {item?.first_name}
              </StyledTableCell>
              <StyledTableCell align="right">{item?.last_name}</StyledTableCell>
              <StyledTableCell align="right">{item?.email}</StyledTableCell>
              <StyledTableCell align="right">{item?.phone} </StyledTableCell>
              <StyledTableCell sx={{ width: "100px" }}>
                {/* Buttons */}
                <Box
                  sx={{
                    display: "flex",
                    gap: "12px",
                  }}
                >
                  {/* Details button */}
                  <DetailsBtn
                    to={`/contacts/${item?.id}`}
                    onClick={() => setCurrentContact(item)}
                  />

                  {/* Update button */}
                  <UpdateBtn
                    to={`/contacts/update/${item?.id}`}
                    onClick={() => setCurrentContact(item)}
                  />
                </Box>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactsTable;
