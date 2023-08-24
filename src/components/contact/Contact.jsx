import React, { useEffect, useState } from "react";
import "./contact.scss";
import { color, motion } from "framer-motion";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ClipLoader } from "react-spinners";

const Contact = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ffdd43",
        contrastText: "#fff",
      },
    },
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "all" });

  const onSubmit = (data) => {
    setLoading(true);
    emailjs
      .send("techwithnaga", "template_x26fpux", data, "C8V7M-Us8IHcCRyL_")
      .then(
        function (response) {
          // console.log("SUCCESS!", response.status, response.text);
          setLoading(false);
          setSuccess(true);
          reset();
        },
        function (err) {
          console.log("FAILED...", err);
          setLoading(false);
        }
      );
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccess(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [success]);

  return (
    <div className="contact" id="contact">
      <div className="contactContainer">
        <motion.div
          className="header"
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h5 className="title">
            <span className="number">05.</span>
            What's next?
          </h5>
          <div className="line"></div>
        </motion.div>

        <div className="contentContainer">
          <motion.div
            className="left"
            initial={{ x: -800, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.75 }}
          >
            <p>
              Let's connect! Whether you have a question or just want to say hi.
              My inbox is always open. I will get back to you at my earliest
              convenience.
            </p>
            <div className="buttonWrapper">
              <a className="email" href="mailto:techwithnaga@gmail.com">
                <button className="goldButton">Say Hello</button>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="right"
            initial={{ x: 800, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
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

                  <div className="formItem" style={{ height: "250px" }}>
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
                    {success && (
                      <label style={{ color: "limegreen" }}>
                        Thank you. I have received your message. I will get back
                        to you shortly.
                      </label>
                    )}
                  </div>

                  <div className="buttonWrapper">
                    {loading ? (
                      <button className="greyButton" type="submit">
                        {" "}
                        <ClipLoader
                          color="#97a0af"
                          s
                          size={18}
                          aria-label="Loading Spinner"
                          data-testid="loader"
                          className="loader"
                        />
                      </button>
                    ) : (
                      <button className="greyButton" type="submit">
                        Send Message
                      </button>
                    )}
                  </div>
                </div>
              </ThemeProvider>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
