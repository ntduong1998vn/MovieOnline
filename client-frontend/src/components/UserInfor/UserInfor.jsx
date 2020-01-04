import React, { useState } from "react";
import {
  FormGroup,
  HelpBlock,
  ControlLabel,
  FormControl,
  Image,
  Button
} from "react-bootstrap";
import "./UserInfor.css";
import { updateUser } from "../../utils/AuthAPI";
import Alert from "react-s-alert";

function FieldGroup({ id, label, help, isStatic, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      {isStatic ? (
        <FormControl.Static {...props} />
      ) : (
        <FormControl {...props} />
      )}
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

const UserInfor = ({ data, reload }) => {
  const [user, setUser] = useState(data);
  const [imagePreviewUrl, setImagePreViewUrl] = useState(null);
  const [selectedFile, setFile] = useState(null);
  const [name, setName] = useState(user.name);

  let level = "";

  switch (user.role) {
    case "ROLE_USER":
      level = "NORMAL MEMBER";
      break;
    case "ROLE_ADMIN":
      level = "ADMIN MEMBER";
      break;
    case "ROLE_VIP":
      level = "VIP MEMBER";
      break;
    default:
      level = "undefined";
      break;
  }
  function fileHandleChange(event) {
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      setImagePreViewUrl(reader.result);
      setFile(file);
    };

    reader.readAsDataURL(file);
  }

  function nameHandleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    if (selectedFile != null) formData.append("file", selectedFile);
    formData.append("name", name);
    updateUser(formData)
      .then(res => {
        Alert.success(res.message);
        reload();
      })
      .catch(err => Alert.error(err.message));
    // addNew(formData).then(res => {
    //   alert("Upload file successfully.");
    // });
  }

  return (
    <div className="user-card">
      <form onSubmit={handleSubmit}>
        <Image
          src={
            imagePreviewUrl == null
              ? `data:image/jpeg;base64,${user.avatar}`
              : imagePreviewUrl
          }
          style={{ width: "180px", height: "270px", margin: "10px 0" }}
          rounded
          // responsive
        />
        <FieldGroup
          id="formControlsFile"
          type="file"
          label="Ảnh đại diện"
          //   help="Example block-level help text here."
          onChange={fileHandleChange}
        />
        <FieldGroup
          id="formControlsText"
          type="text"
          name="name"
          placeholder="Enter text"
          value={name}
          onChange={nameHandleChange}
        />
        <p className="user-title">Email : {user.email}</p>
        <p className="user-role">Loại tài khoản : {level} </p>
        <p>
          <button type="submit" className="user-save">
            Lưu
          </button>
        </p>
      </form>
    </div>
  );
};

export default UserInfor;
