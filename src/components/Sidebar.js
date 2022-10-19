import React from "react";

import { Stack, Typography, Box } from "@mui/material";
import { useState } from "react";
// import { Button } from '@mui/material

const Sidebar = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflow: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((e) => {
        const { name, icon } = e;
        return (
          <div style={{ marginTop: "1rem" }}>
            <button
              class="category-btn"
              onClick={() => {
                setSelectedCategory(name);
              }}
            >
              <span class="margin">{icon}</span>
              <span>{name}</span>
            </button>
          </div>
        );
      })}
    </Stack>
  );
};

export default Sidebar;
