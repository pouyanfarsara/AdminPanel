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
import { useState, useEffect } from "react";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "calc(100vw - 24px)",
    sm: 520,
    md: 600,
  },
  maxWidth: "600px",
  maxHeight: "calc(100vh - 32px)",
  overflowY: "auto",
  bgcolor: "background.paper",
  borderRadius: {
    xs: 2,
    sm: 3,
  },
  boxShadow: 40,
  p: {
    xs: 2,
    sm: 3,
    md: 4,
  },
};

type ProductModalProps = {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  productToEdit: any;
};

type CategoryType = "Clothing" | "Electronics" | "Accessories";

export default function ProductModal({
  open,
  onClose,
  onSuccess,
  productToEdit,
}: ProductModalProps) {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<CategoryType>("Clothing");
  const [sku, setSku] = useState<string>("");

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (productToEdit) {
      setName(productToEdit.name || "");
      setDescription(productToEdit.description || "");
      setCategory(productToEdit.category || "Clothing");
      setSku(productToEdit.sku || "");
    }
  }, [productToEdit]);

  const resetForm = () => {
    setName("");
    setDescription("");
    setCategory("Clothing");
    setSku("");
    setError("");
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = async () => {
    setError("");

    if (!name.trim()) {
      setError("Product name is required");
      return;
    }

    if (!description.trim()) {
      setError("Description is required");
      return;
    }

    if (!sku.trim()) {
      setError("SKU is required");
      return;
    }

    setIsSubmitting(true);

    try {
      const product = {
        name,
        description,
        category,
        sku,
      };

      const res = await fetch("/api/products", {
        method: productToEdit ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          productToEdit ? { ...product, id: productToEdit.id } : product,
        ),
      });

      if (!res.ok) {
        setError(productToEdit ? "Failed to update product" : "Failed to add product");
        return;
      }

      onSuccess();
      resetForm();
      onClose();
    } catch {
      setError("Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography
          variant="h6"
          mb={2}
          sx={{
            fontSize: {
              xs: "20px",
              sm: "22px",
            },
            fontWeight: 700,
          }}
        >
          {productToEdit ? "Edit Product" : "Add Product"}
        </Typography>

        {error && (
          <Typography color="error" mb={2}>
            {error}
          </Typography>
        )}

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
          multiline
          minRows={3}
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

        <Box
          mt={2}
          display="flex"
          gap={2}
          sx={{
            flexDirection: {
              xs: "column",
              sm: "row",
            },
          }}
        >
          <Button
            variant="contained"
            fullWidth
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving..." : "Save"}
          </Button>

          <Button
            variant="outlined"
            fullWidth
            onClick={handleClose}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}