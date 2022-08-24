import React from "react";
import { FormControl,  NativeSelect } from "@mui/material";

const countryPicker = () => {
  return (
    <div style={{paddingLeft:'55rem', width:'400px'}}>
    <FormControl  style={{ width:'200px' }}>
    <NativeSelect>
        <option value="">India</option>
        <option value="">India</option>
        <option value="">India</option>
        <option value="">India</option>
    </NativeSelect>
    </FormControl>
    </div>
  );
};

export default countryPicker;
