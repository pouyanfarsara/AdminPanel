"use client";

import {
  Modal,
  Box,
  TextField,
  Button,
  Select,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 40,
  p: 4,
};

type ProductModalProps = {
  open: boolean;
  onClose: () => void;
};

type CategoryType = "Clothing" | "Electronics" | "Accessories";

export default function ProductModal({ open, onClose }: ProductModalProps) {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<CategoryType>("Clothing");
  const [sku, setSku] = useState<string>("");

  const handleSubmit = () => {
    const product = {
      name,
      description,
      category,
      sku,
    };

    console.log("Product:", product);

    setName("");
    setDescription("");
    setCategory("Clothing");
    setSku("");

    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" mb={2}>
          Add Product
        </Typography>

        <TextField
          fullWidth
          label="Product Name"
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          fullWidth
          label="Description"
          margin="normal"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <FormControl fullWidth margin="normal">
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            value={category}
            label="Category"
            onChange={(e) => setCategory(e.target.value as CategoryType)}
          >
            <MenuItem value="Electronics">Electronics</MenuItem>
            <MenuItem value="Accessories">Accessories</MenuItem>
            <MenuItem value="Clothing">Clothing</MenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          label="SKU"
          margin="normal"
          value={sku}
          onChange={(e) => setSku(e.target.value)}
        />

        <Box mt={2} display="flex" gap={2}>
          <Button variant="contained" fullWidth onClick={handleSubmit}>
            Save
          </Button>

          <Button variant="outlined" fullWidth onClick={onClose}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
