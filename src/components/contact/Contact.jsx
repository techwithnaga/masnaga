import React from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";

const Contact = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ffdd43",
        contrastText: "#fff",
      },
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="contact" id="contact">
      <div className="contactContainer">
        <div className="header">
          <h5 className="title">
            <span className="number">05.</span>Let's Connect
          </h5>
          <div className="line"></div>
        </div>

        <div className="contentContainer">
          <div className="left">
            <p>
              What are your thoughts? My inbox is always open. Whether you have
              a question or just want to say hi. I will get back to you at my
              earliest convenience.
            </p>
            <div className="buttonWrapper">
              <button className="goldButton">Say Hello</button>
            </div>
          </div>

          <div className="right">
            <form onSubmit={handleSubmit(onSubmit)}>
              <ThemeProvider theme={theme}>
                <div className="formWrapper">
                  <div className="name">
                    <div className="formItem">
                      <TextField
                        id="filled-basic"
                        label="First Name"
                        variant="filled"
                        size="small"
                        {...register("firstName", {
                          required: "First name is required.",
                        })}
                      />
                      <label style={{ color: "red" }}>
                        {errors.firstName?.message}
                      </label>
                    </div>
                    <div className="formItem">
                      <TextField
                        id="filled-basic"
                        label="Last Name"
                        variant="filled"
                        size="small"
                        {...register("lastName")}
                      />
                    </div>
                  </div>
                  <div className="formItem">
                    <TextField
                      id="filled-basic"
                      label="Email"
                      variant="filled"
                      size="small"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message: "Invalid email format.",
                        },
                      })}
                    />
                    <label style={{ color: "red" }}>
                      {errors.email?.message}
                    </label>
                  </div>

                  <div className="formItem">
                    <TextField
                      id="filled-basic"
                      label="Message"
                      variant="filled"
                      size="small"
                      {...register("message", {
                        required: "Message is required.",
                      })}
                      multiline
                      rows={5}
                      maxRows={10}
                    />
                    <label style={{ color: "red" }}>
                      {errors.message?.message}
                    </label>
                  </div>

                  <div className="buttonWrapper">
                    <button className="greyButton" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </ThemeProvider>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
