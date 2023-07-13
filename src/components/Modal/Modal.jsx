import {StyledModalSendRequestWrapper, StyledModalSubmitEmailWrapper} from '@/components/Modal/Modal.styled';
import Message from '@/assets/icons/message.svg'
import {
  StyledTypographyUrbanistBody,
  StyledTypographyUrbanistH3,
  StyledTypographyUrbanistSmallSpaces
} from '@/components/UI/Typography/Typography.styled';
import {InputSendRequest, TextAreaSendRequest} from '@/components/UI/Input';
import {StyledButtonSecondary} from '@/components/UI/Button/Button.styled';
import Close from '@/assets/icons/close.svg'

const inputs = [
  {id: 0, label: 'Email', placeholder: 'example@mail.com', name: 'email', type: 'email'},
  {id: 1, label: 'Message', placeholder: 'Enter your request or question...', name: 'message', type: 'textarea'},
]

export function ModalSendRequest({open, handleClose}) {
  return (
    <StyledModalSendRequestWrapper
      open={open}
      onClose={handleClose}
    >
      <div className="modalContainer"
      >
        <button className="closeButton" onClick={handleClose}>
          <Close/>
        </button>
        <div className="header">
          <Message/>
          <StyledTypographyUrbanistH3>
            Send your request
          </StyledTypographyUrbanistH3>
          <StyledTypographyUrbanistBody>
            Let&apos;s meet your goals!
          </StyledTypographyUrbanistBody>
        </div>
        <div className="body">
          {inputs.map(({id, name, label, placeholder, type}) => type === 'textarea'
            ? <TextAreaSendRequest
              key={id}
              name={name}
              label={label}
              placeholder={placeholder}
            />
            : <InputSendRequest
              key={id}
              name={name}
              label={label}
              placeholder={placeholder}
            />
          )}
        </div>
        <div className="footer">
          <StyledButtonSecondary>
            Submit
          </StyledButtonSecondary>
          <StyledTypographyUrbanistSmallSpaces>
            by submitting this form, you contirm that you agree to the storing and processing of your personal data
          </StyledTypographyUrbanistSmallSpaces>
        </div>
      </div>

    </StyledModalSendRequestWrapper>
  );
}

export function ModalSubmitEmail({open, handleClose}) {
  return (
    <StyledModalSubmitEmailWrapper
      open={open}
      onClose={handleClose}
    >
      <div className="modalContainer"
      >
        <button className="closeButton" onClick={handleClose}>
          <Close/>
        </button>
        <div className="header">
          <Message/>
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
          <StyledButtonSecondary>
            Submit
          </StyledButtonSecondary>
          <StyledTypographyUrbanistSmallSpaces>
            by submitting this form, you contirm that you agree to the storing and processing of your personal data
          </StyledTypographyUrbanistSmallSpaces>
        </div>
      </div>

    </StyledModalSubmitEmailWrapper>
  );
}