import { useState } from "react";
import emailjs from "@emailjs/browser";
import useDarkMode from "../hooks/useDarkMode";
import Alert from "../components/Alert";
import BackgroundBeams from "../components/BackgroundBeams";

const Contact = () => {
  const isDarkMode = useDarkMode();
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_2ond9b8",
        "template_49b14cr",
        {
          from_name: formData.name,
          to_name: "Vincent",
          from_email: formData.email,
          to_email: "vincentsalvatorecastelli@gmail.com",
          message: formData.message,
        },
        "6hJerCkh8zQRFegrm"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="relative min-h-screen">
      <BackgroundBeams
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundColor: isDarkMode ? "#150b22" : "#ffffff",
        }}
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="relative z-10 pt-30 pb-30 md:pt-80">
        <div className="flex flex-col items-center max-w-4/5 md:max-w-2/5 px-10 py-20 mx-auto border border-white/10 rounded-2xl bg-bg-dark">
          <div className="flex flex-col items-start w-full gap-5 mb-10">
            <h2 className="font-bold text-3xl md:text-4xl text-bg-light">
              Contact Me
            </h2>
            <p className="font-normal text-neutral-400">
              Interested in collaborating or have a question? Feel free to reach
              out! You can contact me via email or connect with me on LinkedIn.
            </p>
          </div>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-8">
              <label htmlFor="name" className="feild-label text-bg-light">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="field-input field-input-focus"
                placeholder="John Doe"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-8">
              <label htmlFor="email" className="feild-label text-bg-light">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="field-input field-input-focus"
                placeholder="JohnDoe@email.com"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-8">
              <label htmlFor="message" className="feild-label text-bg-light">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                type="text"
                rows="4"
                className="field-input field-input-focus"
                placeholder="Share your thoughts..."
                autoComplete="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className={`w-full px-1 py-3 mb-5 text-lg text-center rounded-md cursor-pointer transition-all duration-300 hover-animation ${
                isDarkMode ? "text-bg-dark" : "text-bg-light"
              } ${isDarkMode ? "btn-radial-primary" : "btn-radial-secondary"}`}
            >
              {" "}
              {!isLoading ? "SEND" : "SENDING..."}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
