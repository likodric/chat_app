import { Button, Checkbox, Form, Input, Select } from "antd";
import "./LogIn.scss";
import React, { useState } from "react";
import { Option } from "antd/lib/mentions";
import { useNavigate } from "react-router-dom";
import Upload, { RcFile, UploadFile, UploadProps } from "antd/lib/upload";

interface LogInProp {
  setUsers: any;
  users: any;
  setFileList: any;
  fileList: string;
}

function LogIn({ setUsers, users, setFileList, fileList }: LogInProp) {
  const [canSubmit, setCanSubmit] = useState<boolean>(false);

  localStorage.setItem(fileList, "");

  const onChange: UploadProps["onChange"] = ({
    fileList: newFileList,
    i,
  }: any) => {
    console.log(newFileList);

    setFileList(newFileList);
  };
  const onPreview = async (file: UploadFile) => {
    console.log(file.url);

    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const addUser = (values: any) => {
    const updateUsers = [...users];
    console.log(updateUsers);
    updateUsers.push(values);
    setUsers(updateUsers);
    onReset();
  };
  const handleChange = () => {
    setCanSubmit(form.getFieldValue("name") && form.getFieldValue("email"));
  };
  const navigate = useNavigate();

  const { Option } = Select;

  const [form] = Form.useForm();

  const onGenderChange = (value: string) => {
    switch (value) {
      case "Musko":
        form.setFieldsValue({ note: "Hi, man!" });
        return;
      case "Zensko":
        form.setFieldsValue({ note: "Hi, lady!" });
        return;
      case "Ostalo":
        form.setFieldsValue({ note: "Hi there!" });
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  const privremeniLogIn = {
    username: "Gadzet",
    pass: "12345",
  };

  const LogInForm = (values: any) => {
    // if (
    //   values.username !== privremeniLogIn.username ||
    //   values.password !== privremeniLogIn.pass
    // ) {
    //   navigate("/home");
    // } else console.log("fefefe");
    onChangeInputValue(values);
  };

  const onChangeInputValue = (e: any) => {
    for (var i = 0; i < users.length; i++) {
      if (
        users[i].email === e.target.value ||
        users[i].password === e.target.value
      ) {
        navigate("/home");
      } else alert("greska");
    }
  };

  return (
    <div className="logInPage">
      <div className="logInCard">
        <Form form={form}>
          <Form.Item>
            <Input
              type="email"
              className="logInInputs"
              placeholder="Email"
              required={true}
              onChange={onChangeInputValue}
            />
          </Form.Item>
          <Form.Item>
            <Input
              type="password"
              name="password"
              className="logInInputs"
              placeholder="Sifra"
              required={true}
              onChange={onChangeInputValue}
            />
          </Form.Item>
          <Button type="primary" onClick={(e) => LogInForm(e)}>
            Uloguj se
          </Button>
        </Form>
      </div>

      <Button onClick={() => navigate("/table")}> idi na table</Button>

      <Form
        form={form}
        name="control-hooks"
        onFinish={addUser}
        onValuesChange={handleChange}
        initialValues={users!}
      >
        <Form.Item name="name" label="ime" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Sifra" rules={[{ required: true }]}>
          <Input type="password" />
        </Form.Item>
        <Form.Item
          name="dateOfBirth"
          label="Datum rodjenja"
          rules={[{ required: true }]}
        >
          <Input type="date" min="01.01.1940" />
        </Form.Item>
        <Form.Item name="gender" label="Pol" rules={[{ required: true }]}>
          <Select
            placeholder="Select a option and change input text above"
            onChange={onGenderChange}
            allowClear
          >
            <Option value="male">Musko</Option>
            <Option value="female">Zensko</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Upload
            name="photo"
            listType="picture-card"
            onChange={onChange}
            onPreview={onPreview}
          >
            {fileList.length < 5 && "+ Upload"}
          </Upload>
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.gender !== currentValues.gender
          }
        >
          {({ getFieldValue }) =>
            getFieldValue("gender") === "other" ? (
              <Form.Item
                name="customizeGender"
                label="Customize Gender"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            ) : null
          }
        </Form.Item>
        <Form.Item>
          <Button
            className="submitBtn"
            type="primary"
            htmlType="submit"
            disabled={!canSubmit}
          >
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LogIn;
