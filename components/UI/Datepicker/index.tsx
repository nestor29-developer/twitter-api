import * as React from "react";
import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import {
  DateRangePicker,
  DateRange,
} from "@mui/x-date-pickers-pro/DateRangePicker";

interface DateRangePickerBasic {
  setAdvancedSearch: Function;
  setStartDate: Function;
  setEndDate: Function;
  setSimpleWord: Function;
}

export const DateRangePickerBasic = ({
  setAdvancedSearch,
  setStartDate,
  setEndDate,
  setSimpleWord,
}: DateRangePickerBasic) => {
  let currentDate = new Date();
  const [value, setValue] = React.useState<DateRange<Dayjs>>([null, null]);
  const [text, setText] = React.useState<string>("");

  const handleChangeEvent = (e: any) => {
    setText(e.target.value);
    const startDate: any = value[0]?.toISOString();
    const endDate: any = value[1]?.toISOString();
    const dates =
      value[0] && value[1]
        ? " until: " +
          endDate.slice(0, 10) +
          " since: " +
          startDate.slice(0, 10)
        : "";
    setAdvancedSearch(e.target.value + dates);
    setStartDate(startDate);
    setEndDate(endDate);
    setSimpleWord(e.target.value);
  };

  const increaseDays = (fecha: any, dias: number) => {
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
  };

  return (
    <>
      <TextField
        style={{ marginBottom: "32px" }}
        id="outlined-search"
        value={text}
        label="Search field"
        type="search"
        onChange={handleChangeEvent}
        helperText="Some important text"
        fullWidth={true}
      />

      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        localeText={{ start: "Since", end: "Till" }}
      >
        <DateRangePicker
          value={value}
          minDate={increaseDays(currentDate, -5)}
          disableFuture={true}
          onChange={(newValue: any) => {
            const startDate = newValue[0]?.toISOString();
            const endDate = newValue[1]?.toISOString();
            const dates =
              newValue[0] && newValue[1]
                ? " until: " +
                  endDate.slice(0, 10) +
                  " since: " +
                  startDate.slice(0, 10)
                : "";
            setValue(newValue);
            setAdvancedSearch(text + dates);
            setStartDate(startDate);
            setEndDate(endDate);
            setSimpleWord(text);
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <TextField {...startProps} fullWidth={true} />
              <Box sx={{ mx: 2 }}> to </Box>
              <TextField {...endProps} fullWidth={true} />
            </React.Fragment>
          )}
        />
      </LocalizationProvider>
    </>
  );
};
