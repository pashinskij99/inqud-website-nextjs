import { Fragment, useState } from "react";
import clsx from "clsx";
import { DialogContent } from "@mui/material";
import {
  StyledFeeModalWrapper,
  StyledModalSendRequestWrapper,
  StyledModalSubmitEmailWrapper,
} from "@/components/Modal/Modal.styled";
import Message from "@/assets/icons/message.svg";
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH3,
  StyledTypographyUrbanistH4,
  StyledTypographyUrbanistSmallSpaces,
} from "@/components/UI/Typography/Typography.styled";
import { InputSendRequest, TextAreaSendRequest } from "@/components/UI/Input";
import { StyledButtonSecondary } from "@/components/UI/Button/Button.styled";
import Close from "@/assets/icons/close.svg";
import { SelectPrimary } from "../UI/Select";

const inputs = [
  {
    id: 0,
    label: "Email",
    placeholder: "example@mail.com",
    name: "email",
    type: "email",
  },
  {
    id: 1,
    label: "Message",
    placeholder: "Enter your request or question...",
    name: "message",
    type: "textarea",
  },
];

export function ModalSendRequest({ open, handleClose }) {
  return (
    <StyledModalSendRequestWrapper open={open} onClose={handleClose}>
      <div className="modalContainer">
        <button className="closeButton" onClick={handleClose}>
          <Close />
        </button>
        <div className="header">
          <Message />
          <StyledTypographyUrbanistH3>
            Send your request
          </StyledTypographyUrbanistH3>
          <StyledTypographyUrbanistBody>
            Let&apos;s meet your goals!
          </StyledTypographyUrbanistBody>
        </div>
        <div className="body">
          {inputs.map(({ id, name, label, placeholder, type }) =>
            type === "textarea" ? (
              <TextAreaSendRequest
                key={id}
                name={name}
                label={label}
                placeholder={placeholder}
              />
            ) : (
              <InputSendRequest
                key={id}
                name={name}
                label={label}
                placeholder={placeholder}
              />
            )
          )}
        </div>
        <div className="footer">
          <StyledButtonSecondary>Submit</StyledButtonSecondary>
          <StyledTypographyUrbanistSmallSpaces>
            by submitting this form, you contirm that you agree to the storing
            and processing of your personal data
          </StyledTypographyUrbanistSmallSpaces>
        </div>
      </div>
    </StyledModalSendRequestWrapper>
  );
}

export function ModalSubmitEmail({ open, handleClose }) {
  return (
    <StyledModalSubmitEmailWrapper open={open} onClose={handleClose}>
      <div className="modalContainer">
        <button className="closeButton" onClick={handleClose}>
          <Close />
        </button>
        <div className="header">
          <Message />
          <StyledTypographyUrbanistH3>
            Submit your email
          </StyledTypographyUrbanistH3>
          <StyledTypographyUrbanistBody>
            We&apos;ll alert you when Card2crypto launches!
          </StyledTypographyUrbanistBody>
        </div>
        <div className="body">
          <InputSendRequest
            name="email"
            label=""
            placeholder="example@mail.com"
          />
        </div>
        <div className="footer">
          <StyledButtonSecondary>Submit</StyledButtonSecondary>
          <StyledTypographyUrbanistSmallSpaces>
            by submitting this form, you contirm that you agree to the storing
            and processing of your personal data
          </StyledTypographyUrbanistSmallSpaces>
        </div>
      </div>
    </StyledModalSubmitEmailWrapper>
  );
}

const industryList = ["Fintech1", "Fintech2", "Fintech3"];

const getInput = ({
  name,
  type,
  label,
  placeholder,
  handleChange,
  industry,
}) => {
  switch (type) {
    case "text":
      return (
        <InputSendRequest
          label={label}
          type={type}
          name={name}
          placeholder={placeholder}
        />
      );
    case "textarea":
      return (
        <TextAreaSendRequest
          name={name}
          label={label}
          placeholder={placeholder}
        />
      );
    case "select":
      return (
        <SelectPrimary
          name={name}
          label={label}
          placeholder={placeholder}
          handleChange={handleChange}
          activeItem={industry}
          listItems={industryList}
        />
      );
    default:
      return null;
  }
};

const tabs = ["Email", "Phone", "Whatsapp"];

const getTabContent = (tab) => {
  switch (tab) {
    case "Email":
      return (
        <InputSendRequest
          classNameWrapper="tabInput"
          name="email"
          placeholder="example@mail.com"
          type="email"
          label="Email"
        />
      );
    case "Phone":
      return (
        <InputSendRequest
          classNameWrapper="tabInput"
          name="phone"
          placeholder="+38067XXXXXXX"
          type="text"
          label="Phone"
        />
      );
    case "Whatsapp":
      return (
        <InputSendRequest
          classNameWrapper="tabInput"
          name="whatsapp"
          placeholder="whatsapp username"
          type="text"
          label="Whatsapp"
        />
      );
    default:
      return null;
  }
};

export function FeeModal({ open, handleClose }) {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [industry, setIndustry] = useState("");

  const handleChange = (event) => {
    setIndustry(event.target.value);
  };

  const handleTab = (nameTab) => {
    setActiveTab(nameTab);
  };

  const feeInputs = [
    {
      id: 0,
      name: "company",
      type: "text",
      label: "Company name",
      placeholder: "inqud",
    },
    {
      id: 1,
      name: "website",
      type: "text",
      label: "Website",
      placeholder: "www.inqud.com",
    },
    {
      id: 2,
      name: "industry",
      type: "select",
      label: "Industry",
      placeholder: "Fintech",
      handleChange,
      industry,
    },
    {
      id: 3,
      name: "message",
      type: "textarea",
      label: "Message (optional)",
      placeholder:
        "Feel free to provide any additional information or details here.",
    },
  ];

  return (
    <StyledFeeModalWrapper scroll="body" open={open} onClose={handleClose}>
      <DialogContent>
        {/* <DialogContentText tabIndex={-1}> */}
        <div className="modalContainer">
          <button className="closeButton" onClick={handleClose}>
            <Close />
          </button>
          <div className="header">
            <StyledTypographyUrbanistH4>
              Please provide the details for preparing a special offer
            </StyledTypographyUrbanistH4>
          </div>
          <div className="body">
            <div className="input-wrapper">
              {feeInputs.map(({ ...args }) => (
                <Fragment key={args.id}>{getInput({ ...args })}</Fragment>
              ))}
            </div>

            <StyledTypographyUrbanistBody className="description">
              Share your preferred communication method for a better experience.
            </StyledTypographyUrbanistBody>

            <div className="tabs">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTab(tab)}
                  className={clsx({
                    ["active"]: activeTab === tab,
                  })}
                >
                  <StyledTypographyUrbanistBody>
                    {tab}
                  </StyledTypographyUrbanistBody>
                </button>
              ))}
            </div>
            <div className="tab-content">{getTabContent(activeTab)}</div>
          </div>
          <div className="footer">
            <button className="submit-btn">
              <StyledTypographyUrbanistBody>
                Get a special offer
              </StyledTypographyUrbanistBody>
            </button>

            <StyledTypographyUrbanistSmallSpaces className="description">
              by submitting this form, you contirm that you agree to the storing
              and processing of your personal data
            </StyledTypographyUrbanistSmallSpaces>
          </div>
        </div>
      </DialogContent>
      {/* <DialogContent>
        <div className='modalContainer'>
          <button className='closeButton' onClick={handleClose}>
            <Close />
          </button>
          <div className='header'>
            <StyledTypographyUrbanistH4>
              Please provide the details for preparing a special offer
            </StyledTypographyUrbanistH4>
          </div>
          <div className='body'>
            <div className='input-wrapper'>
              {feeInputs.map(({ ...args }) => (
                <Fragment key={args.id}>{getInput({ ...args })}</Fragment>
              ))}
            </div>

            <StyledTypographyUrbanistBody className='description'>
              Share your preferred communication method for a better experience.
            </StyledTypographyUrbanistBody>

            <div className='tabs'>
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTab(tab)}
                  className={clsx({
                    ['active']: activeTab === tab,
                  })}
                >
                  <StyledTypographyUrbanistBody>
                    {tab}
                  </StyledTypographyUrbanistBody>
                </button>
              ))}
            </div>
            <div className='tab-content'>{getTabContent(activeTab)}</div>
          </div>
          <div className='footer'>
            <button className='submit-btn'>
              <StyledTypographyUrbanistBody>
                Get a special offer
              </StyledTypographyUrbanistBody>
            </button>

            <StyledTypographyUrbanistSmallSpaces className='description'>
              by submitting this form, you contirm that you agree to the storing
              and processing of your personal data
            </StyledTypographyUrbanistSmallSpaces>
          </div>
        </div>
      </DialogContent> */}
    </StyledFeeModalWrapper>
  );
}
