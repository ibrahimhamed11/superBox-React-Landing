// LoginPage.js
import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../components/AuthContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import axios from "axios";

const LoginPage = () => {
  const { login } = useAuth();
  const history = useHistory();

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("اسم المستخدم مطلوب"),
    password: Yup.string().required("كلمة المرور مطلوبة"),
  });

  const handleSubmit = async (values) => {
    try {
      // You can replace the following URL with your authentication endpoint
      const response = await axios.post("/api/auth/login", {
        username: values.username,
        password: values.password,
      });

      // Assuming the server responds with user data upon successful login
      const userData = response.data;

      // Set user data upon successful login
      login(userData);

      // Redirect to the dashboard
      history.push("/dashboard");
    } catch (error) {
      // Handle authentication failure (show error, etc.)
      console.error("Authentication failed:", error.message);
    }
  };

  const theme = createTheme({
    direction: "rtl",
  });

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: "100%",
            minWidth: "300px",
            maxWidth: "400px",
            padding: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "right",
          }}
        >
          <Typography component="h1" variant="h5">
            تسجيل الدخول
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form noValidate sx={{ mt: 1 }}>
              <Field
                as={TextField}
                margin="normal"
                required
                fullWidth
                id="username"
                label="اسم المستخدم"
                name="username"
                autoFocus
                sx={{ width: "100%", mb: 2 }}
              />
              <ErrorMessage
                name="username"
                component="div"
                sx={{ color: "red" }}
              />

              <Field
                as={TextField}
                margin="normal"
                required
                fullWidth
                name="password"
                label="كلمة المرور"
                type="password"
                sx={{ width: "100%", mb: 2 }}
              />
              <ErrorMessage
                name="password"
                component="div"
                sx={{ color: "red" }}
              />

              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                sx={{ mt: 3, mb: 2 }}
              >
                تسجيل الدخول
              </Button>
            </Form>
          </Formik>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default LoginPage;
