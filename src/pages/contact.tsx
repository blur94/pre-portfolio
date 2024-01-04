import { FormEvent, useState } from "react";

type Details = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function contactPage() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Details | undefined>();

  const handleValidation = (e: FormEvent) => {
    const re = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$");
    e.preventDefault();
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
  };

  const handleChange = (prop: keyof Details, value: string) => {
    setDetails({ ...details, [prop]: value });
  };

  return (
    <main className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleValidation}
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
          Send
        </button>
      </form>
    </main>
  );
}
