"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import { Lock, Mail, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("admin@test.com");
  const [password, setPassword] = useState("123456");
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      toast.error("Please enter email and password");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        toast.error("Invalid email or password");
        return;
      }

      toast.success("Logged in successfully");
      router.push("/dashboard");
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        background:
          "linear-gradient(135deg, #f8fafc 0%, #eef2ff 50%, #f1f5f9 100%)",
        px: 2,
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 440,
          borderRadius: 4,
          boxShadow: "0 24px 80px rgba(15, 23, 42, 0.12)",
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Box display="flex" justifyContent="center" mb={3}>
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: "16px",
                background: "#4f46e5",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ShieldCheck size={28} />
            </Box>
          </Box>

          <Typography variant="h4" fontWeight={700} textAlign="center">
            Welcome back
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            textAlign="center"
            mt={1}
            mb={3}
          >
            Sign in to manage your product dashboard
          </Typography>

          <form onSubmit={handleLogin}>
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Mail size={18} />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              fullWidth
              label="Password"
              margin="normal"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock size={18} />
                  </InputAdornment>
                ),
              }}
            />

            <Button
              fullWidth
              size="large"
              variant="contained"
              type="submit"
              disabled={isLoading}
              sx={{
                mt: 3,
                py: 1.4,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 700,
                backgroundColor: "#4f46e5",
              }}
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
          </form>

          <Box
            mt={3}
            p={2}
            sx={{
              background: "#f8fafc",
              border: "1px solid #e5e7eb",
              borderRadius: 2,
            }}
          >
            <Typography variant="caption" color="text.secondary">
              Demo account
            </Typography>
            <Typography variant="body2" mt={0.5}>
              Email: <strong>admin@test.com</strong>
            </Typography>
            <Typography variant="body2">
              Password: <strong>123456</strong>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}