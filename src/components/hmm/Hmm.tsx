import React, { useState } from "react";
import useGetBloodRecord from "./hooks/useGetBloodRecord";
import useCreatebloodRecord from "./hooks/useCreatebloodRecord";
import useGetDiv from "./hooks/useGetDiv";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import useGetUpazila from "./hooks/useGetUpazila";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";
import { Toaster } from "react-hot-toast";
const Hmm: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(3);

  const { result, data, count } = useGetBloodRecord(username, page, pageSize);
  const [divisionId, setDivisionId] = useState<number>(0);

  const [upazilaId, setUpazilaId] = useState<any>(0);
  const { createBloodRecord, createError, createISError, createSuccess } =
    useCreatebloodRecord();

  const { divResult, division } = useGetDiv({});

  const { upazila, nullUpa } = useGetUpazila({ id: divisionId });

  const [user, setUser] = useState<string>("");
  const [date, setDate] = useState<string>("");

  //const selectedOption = upazila.find((location) => location.id === upazilaId);

  const handleSubmit = () => {
    createBloodRecord({ user, date });
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPageSize(parseInt(event.target.value));
    setPage(1);
  };

  return (
    <div className="container">
      {!result.isFetched && "loading"}
      <div className="mt-5 mb-5">
        <Autocomplete
          sx={{ width: 300 }}
          options={division}
          onChange={(event, newValue: any) => {
            setDivisionId(newValue.id);
          }}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField {...params} label="Movie" variant="outlined" />
          )}
        />

        <Autocomplete
          sx={{ width: 300 }}
          options={upazila}
          //value={selectedOption}
          onChange={(event, newValue) => {
            setUpazilaId(newValue.id);
          }}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField {...params} label="Movie" variant="outlined" />
          )}
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
      <div className="mt-5">
        <input type="text" onChange={(e) => setUser(e.target.value)} />
        <input type="date" onChange={(e) => setDate(e.target.value)} />
        <button onClick={handleSubmit}>submit</button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Id</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Username</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{item.user}</TableCell>
                <TableCell align="right">{item.date}</TableCell>
                <TableCell align="right">{item.user_details}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={count}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={pageSize}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          ".MuiTablePagination-toolbar": {
            padding: "0 16px",
          },
          ".MuiTablePagination-selectLabel, .MuiTablePagination-input, .MuiTablePagination-actions, .MuiTablePagination-displayedRows":
            {
              marginTop: 0,
              marginBottom: 0,
              display: "flex",
              alignItems: "center",
            },
        }}
      />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Hmm;
