import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Form,
  Input,
  Radio,
  Select,
  Spin,
  Statistic,
} from "antd";
import io from "socket.io-client";

import { SocketIOContext } from "context/Board";

import DisabledBoard from "./DisabledBoard";
import SocketIOBoard from "./SocketIOBoard";
import { PlayerSides } from "types/Board";

const socket = io();

const TwoPlayerBoard = () => {
  const [activity, setActivity] = useState("createGame");
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [hasStaked, setHasStaked] = useState(false);

  const [gameId, setGameId] = useState("");
  const [playerSide, setPlayerSide] = useState("");
  const [opponent, setOpponent] = useState("");
  const [username, setUsername] = useState("");

  const [gameSettings, setGameSettings] = useState<any>();

  const [startGame, setStartGame] = useState(false);

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 12 },
  };
  const [form] = Form.useForm();

  const onActivityChange = ({ activity: choice }: { activity: string }) => {
    console.log({ activity, choice });
    if (choice && choice !== activity) {
      setActivity(choice);
    }
  };

  const onFinish = async (values: any) => {
    const gameSettings = values;
    setUsername(() => values.username);
    console.log({ finishValues: values });

    socket.on("start-game", (sides: PlayerSides) => {
      if (sides.white === values.username) {
        setPlayerSide(() => "white");
        setOpponent(() => sides.black);
      } else {
        setPlayerSide(() => "black");
        setOpponent(() => sides.white);
      }
      setStartGame(true);
    });

    if (values.activity === "createGame") {
      //stake coin
      if (tnb_keysign) {
        console.log("in Keysign");
        console.log(tnb_keysign);
        await tnb_keysign.requestHandshake(() =>
          console.log("Keysign is installed!")
        );

        await tnb_keysign.requestVerify(values.accountNumber, (res) =>
          console.log(res)
        );
        await tnb_keysign.requestTransfer(
          "8de30226230c35bbc1ce4a63c62a7b9c86bf0ce21fc7bc1a984b7884a9f88782",
          values.stakedAmount,
          (res) => console.log(res)
        );
      }

      //call on success
      socket.on("game-id", (gameId: string) => {
        setGameId(() => gameId);
        setIsFormFilled(true);
      });

      //call server to create game
      socket.emit("create-game", values.username, gameSettings);
    } else if (values.activity === "joinGame") {
      socket.on("game-details", (gameSettings) => {
        if (gameSettings) {
          setGameSettings(gameSettings);
          setIsFormFilled(true);
        } else {
          throw Error("Game settings not received");
        }
      });
      setUsername(values.username);
      socket.emit("get-game-details", values.gameId);

      setGameId(values.gameId);
    } else {
      socket.disconnect();
      throw new Error("Error Filling Form");
    }
  };

  const onJoinGame = async (values: any) => {
    //if has not staked
    if (!hasStaked) {
      //collect stake
      if (tnb_keysign) {
        console.log("in Keysign");
        console.log(tnb_keysign);
        await tnb_keysign.requestHandshake(() =>
          console.log("Keysign is installed!")
        );

        await tnb_keysign.requestVerify(values.accountNumber, (res) =>
          console.log("verify account number", res)
        );
        await tnb_keysign.requestTransfer(
          "8de30226230c35bbc1ce4a63c62a7b9c86bf0ce21fc7bc1a984b7884a9f88782",
          gameSettings.stakedAmount,
          (res) => {
            if (res.success || true) {
              setHasStaked(true);
            }
          }
        );
      }
    } else {
      //proceed to game
      socket.emit("join-game", values.gameId, values.username);
    }
  };

  return (
    <>
      {startGame ? (
        <SocketIOContext.Provider value={socket}>
          <SocketIOBoard
            gameId={gameId}
            playerSide={playerSide}
            opponent={opponent}
            username={username}
          />
        </SocketIOContext.Provider>
      ) : (
        <>
          <DisabledBoard />
          {isFormFilled ? (
            activity === "createGame" ? (
              <Card
                style={{
                  position: "absolute",
                  background: "rgb(200, 200, 200)",
                  width: "500px",
                }}
              >
                <Spin tip="Waiting for friend to join Game ..." />
                <Statistic title="Game ID" value={gameId} />
              </Card>
            ) : (
              <>
                <Card
                  style={{
                    position: "absolute",
                    background: "rgb(200, 200, 200)",
                    width: "500px",
                  }}
                >
                  <Statistic title="Game ID" value={gameId} />
                  <Statistic title="Time" value={gameSettings.time} />

                  <Form
                    style={{
                      width: "500px",
                    }}
                    {...layout}
                    form={form}
                    layout="horizontal"
                    name="joinGame"
                    onValuesChange={onActivityChange}
                    onFinish={onFinish}
                  >
                    {" "}
                    <Form.Item
                      label="TNB Account"
                      name="accountNumber"
                      rules={[
                        {
                          required: true,
                          message: "Please input your account!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item>
                      <Statistic
                        title="stake Amount (TNB)"
                        value={gameSettings.stakedAmount}
                        precision={2}
                      />
                      <Button
                        style={{ marginTop: 16 }}
                        disabled={hasStaked}
                        htmlType="submit"
                        type="primary"
                      >
                        Stake Coins
                      </Button>
                    </Form.Item>
                    <Form.Item>
                      <Button
                        type="primary"
                        disabled={!hasStaked}
                        htmlType="submit"
                      >
                        {"Join Game"}
                      </Button>
                    </Form.Item>
                  </Form>
                </Card>
              </>
            )
          ) : (
            <Form
              style={{
                position: "absolute",
                background: "rgb(200, 200, 200)",
                width: "500px",
              }}
              {...layout}
              form={form}
              layout="horizontal"
              name="friendGameForm"
              initialValues={{ activity: "createGame", time: "3" }}
              onValuesChange={onActivityChange}
              onFinish={onFinish}
            >
              <Form.Item label="" name="activity">
                <Radio.Group value="createGame">
                  <Radio.Button value="createGame">Create Game</Radio.Button>
                  <Radio.Button value="joinGame">Join Game</Radio.Button>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>

              {activity === "createGame" ? (
                <>
                  <Form.Item
                    label="TNB Account"
                    name="accountNumber"
                    rules={[
                      { required: true, message: "Please input your account!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="stakedAmount"
                    label="Stake Amount"
                    rules={[{ required: true }]}
                  >
                    <Select
                      placeholder="Select amount of coins to leverage "
                      allowClear
                    >
                      <Select.Option value="0">0 TNBC</Select.Option>
                      <Select.Option value="10">10 TNBC</Select.Option>

                      <Select.Option value="50">50 TNBC</Select.Option>

                      <Select.Option value="100">100 TNBC</Select.Option>
                      <Select.Option value="250">200 TNBC</Select.Option>
                      <Select.Option value="500">500 TNBC</Select.Option>

                      <Select.Option value="1000">1000 TNBC</Select.Option>
                    </Select>
                  </Form.Item>

                  <Form.Item label="Time" name="time">
                    <Radio.Group value={"3"}>
                      <Radio.Button value="1">1 min</Radio.Button>
                      <Radio.Button value="2">2 min</Radio.Button>
                      <Radio.Button value="3">3 min</Radio.Button>
                      <Radio.Button value="5">5 min</Radio.Button>
                      <Radio.Button value="10">10 min</Radio.Button>
                    </Radio.Group>
                  </Form.Item>
                </>
              ) : (
                <Form.Item
                  name="gameId"
                  label="Game ID"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              )}

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  {activity === "createGame" ? "Create Game" : "Join Game"}
                </Button>
              </Form.Item>
            </Form>
          )}
        </>
      )}
    </>
  );
};

export default TwoPlayerBoard;
