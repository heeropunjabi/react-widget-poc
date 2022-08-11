//import CryptoList from "./components/CryptoList";

//import { CryptoList } from "./components";

import Button from "antd/lib/button";
import Steps from "antd/lib/steps";
//import "antd/dist/antd.min.css";
import "antd/dist/antd.variable.min.css";
import ConfigProvider from "antd/lib/config-provider";
import { useEffect } from "react";

const { Step } = Steps;

export default function App() {
  useEffect(() => {
    ConfigProvider.config({
      theme: {
        primaryColor: "#8875FF",
        textColor: "#8875FF",
      },
    });
  });
  return (
    <>
      <div className='flex'>
        <div>
          <Button
            type='primary'
            className='rounded-full'
            onClick={() => {
              alert("Hello World!");
            }}
          >
            PRESS ME
          </Button>
        </div>
        <div className='grid gap-4 grid-cols-2'>
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
        </div>
      </div>
      <Steps current={1}>
        <Step title='Finished' description='This is a description.' />
        <Step
          title='In Progress'
          subTitle='Left 00:00:08'
          description='This is a description.'
        />
        <Step title='Waiting' description='This is a description.' />
      </Steps>
    </>
  );
}
