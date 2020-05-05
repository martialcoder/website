import axios from "axios";
import Joi from "@hapi/joi";

const emailValid = Joi.string().email({ tlds: { allow: false } });

const {
  REACT_APP_GF_API_KEY = "",
  REACT_APP_GF_SUBJECT_FIELD = "subject",
  REACT_APP_GF_EMAIL_FIELD = "email",
  REACT_APP_GF_MESSAGE_FIELD = "message",
} = process.env;

const GF_ACTION_URL = `https://docs.google.com/forms/u/3/d/e/${REACT_APP_GF_API_KEY}/formResponse`;
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

export const sendMessage = ({
  email,
  subject,
  message,
}: {
  email: string;
  subject: string;
  message: string;
}) => {
  const formData = new FormData();
  if (emailValid.validate(email).error) throw new Error("invalid-email");
  if (!message.trim()) throw new Error("invalid-message");
  formData.append(REACT_APP_GF_EMAIL_FIELD, email);
  formData.append(REACT_APP_GF_SUBJECT_FIELD, subject);
  formData.append(REACT_APP_GF_MESSAGE_FIELD, message);
  return axios.post(CORS_PROXY + GF_ACTION_URL, formData);
};
// Subject [Training,Development,Consulting]
// <input type="hidden" name="entry.469519379" jsname="L9xHkb" disabled="">

// Email
// <input type="text" class="quantumWizTextinputPaperinputInput exportInput" jsname="YPqjbf" autocomplete="off" tabindex="0" aria-label="Email" aria-describedby="i.desc.715284655 i.err.715284655" name="entry.708561394" value="" required="" dir="auto" data-initial-dir="auto" data-initial-value="">

// Message
// <textarea class="quantumWizTextinputPapertextareaInput exportTextarea" jsname="YPqjbf" data-rows="1" tabindex="0" aria-label="Message" jscontroller="gZjhIf" jsaction="input:Lg5SV;ti6hGc:XMgOHc;rcuQ6b:WYd;" required="" name="entry.704660856" dir="auto" data-initial-dir="auto" data-initial-value="" aria-describedby="i.desc.2135574346 i.err.2135574346" style="height: 24px;"></textarea>
