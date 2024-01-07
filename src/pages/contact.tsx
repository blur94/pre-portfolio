import useNotification from "@/hooks/useNotification";
import { ThemeIcon } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import axios from "axios";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [details, setDetails] = useState(initialDetails);
  const [errors, setErrors] = useState<Details | undefined>();
  const [visible, setVisible] = useState(false);

  const { handleSuccess, handleError } = useNotification();
  const { push, back } = useRouter();

  const handleValidation = () => {
    const re = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$");

    let error: Details = {} as Details;

    if (!details.name) {
      error["name"] = "Full Name is required";
    }

    if (!details.email) {
      error["email"] = "Email is required";
    } else if (!re.test(details.email)) {
      error["email"] = "Invalid email format";
    }

    if (!details.subject) {
      error["subject"] = "Subject is required";
    }

    if (!details.message) {
      error["message"] = "Message is required";
    }

    setErrors({ ...error });
    return error;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setVisible(true);
      const error = handleValidation();
      const hasError = Object.keys(error).length > 0;
      if (hasError) return;

      const { data: res } = await axios.post("/api/email", details);

      handleSuccess(res.entity, res.message);
      push("/");
    } catch (error) {
      return handleError("Email Not Sent", error as string);
    } finally {
      setVisible(false);
    }
  };

  const handleChange = (prop: keyof Details, value: string) => {
    setDetails({ ...details, [prop]: value });
  };

  return (
    <>
      <ThemeIcon
        my={{ base: 30, md: 50 }}
        w={100}
        variant="light"
        ml={{ base: 15, md: 150 }}
        onClick={back}
        style={{ cursor: "pointer" }}
      >
        <IconArrowLeft color="#a572c5" size={30} />
      </ThemeIcon>
      <main className="flex h-3/4 items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="shadow-2xl p-5 bg-white rounded-lg"
        >
          <p className="text-[#a572c5] mb-5 text-2xl">Send a message</p>

          <div className="mb-5">
            <label htmlFor="name">
              Full Name
              <input
                type="text"
                name="name"
                // required
                placeholder="Enter Name"
                value={details.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
              <p className="text-red-500 text-[10px] mt-0">
                {errors && errors.name}
              </p>
            </label>
          </div>

          <div className="mb-5">
            <label htmlFor="email">
              Email
              <input
                type="text"
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                // required
                placeholder="Enter Email Address"
                value={details.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
              <p className="text-red-500 text-[10px] mt-0">
                {errors && errors.email}
              </p>
            </label>
          </div>

          <div className="mb-5">
            <label htmlFor="subject">
              Subject
              <input
                type="text"
                name="subject"
                // required
                placeholder="Enter Subject"
                value={details.subject}
                onChange={(e) => handleChange("subject", e.target.value)}
              />
              <p className="text-red-500 text-[10px] mt-0">
                {errors && errors.subject}
              </p>
            </label>
          </div>

          <div className="mb-5">
            <label htmlFor="message">
              Message
              <textarea
                name="Message"
                placeholder="Enter Message"
                value={details.message}
                cols={30}
                onChange={(e) => handleChange("message", e.target.value)}
              />
              <p className="text-red-500 text-[10px] mt-0">
                {errors && errors.message}
              </p>
            </label>
          </div>

          <button className="btn" type="submit">
            {visible ? "Sending..." : "Send"}
          </button>
        </form>
      </main>
    </>
  );
}

type Details = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialDetails = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
