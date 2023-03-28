export type ContactDetailsProps = {
  email: string;
  phone: string;
};

const ContactDetails = ({ phone, email }: ContactDetailsProps) => (
  <div>
    <p>{email}</p>
    <p>{phone}</p>
  </div>
);

export default ContactDetails;
