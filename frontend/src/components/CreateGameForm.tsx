import React from "react";
import { Form, Input, Button, Select } from "antd";

const { Item, useForm } = Form;
const { Option } = Select;

const CreateGameForm = () => {
  const [form] = useForm();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const onFinish = async (values: any) => {
    console.log(values);
    console.log("running");
    const acc =
      "8de30226230c35bbc1ce4a63c62a7b9c86bf0ce21fc7bc1a984b7884a9f88782";

    if (tnb_keysign) {
      tnb_keysign.requestHandshake(() => console.log("Keysign is installed!"));
      tnb_keysign.requestTransfer(acc, values.stakeAmount, (res) => {
        console.log(res);
        if (res.success) {
          //talk to server ad create a room on socket io
          //return game id

          console.log("starting game...");
        }
      });
      console.log(values.stakeAmount);
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        background: "rgba(220, 220, 220, 1)",
        zIndex: "4",
      }}
    >
      <Form
        {...layout}
        form={form}
        layout="horizontal"
        name="Create new game"
        onFinish={onFinish}
        onFinishFailed={() => console.log("failed miserably")}
      >
        <Item name="username" label="Username" rules={[{ required: true }]}>
          <Input />
        </Item>

        <Item
          name="stakeAmount"
          label="Stake Amount"
          rules={[{ required: true }]}
        >
          <Select placeholder="Select amount of coins to leverage " allowClear>
            <Option value="0">0 TNBC</Option>

            <Option value="50">50 TNBC</Option>

            <Option value="100">100 TNBC</Option>
            <Option value="250">200 TNBC</Option>
            <Option value="500">500 TNBC</Option>

            <Option value="1000">1000 TNBC</Option>
          </Select>
        </Item>
        <Item>
          <Button type="primary" htmlType="submit">
            {" "}
            Create Game{" "}
          </Button>
        </Item>
      </Form>
    </div>
  );
};

export default CreateGameForm;
