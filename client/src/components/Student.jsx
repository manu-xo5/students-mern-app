import Input from "./Input";

const Student = ({ location }) => {
  const { name, phone, dob, college, address, identity, note } = location.state;
  return (
    <>
      <h1>{name}</h1>
      <div>
        <Input label="Phone" value={phone} disabled />
        <Input label="DOB" value={dob} disabled />
        <Input label="College" value={college || " ~ "} disabled />
        <Input label="Address" value={address || " ~ "} disabled />
        <Input label="Identity" value={identity} disabled />
        <Input
          as="textarea"
          label={`Note to ${name}`}
          value={note || " ~ "}
          disabled
        />
      </div>
    </>
  );
};

export default Student;
