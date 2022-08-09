//import CryptoList from "./components/CryptoList";

import { CryptoList } from "./components";

import {
  Avatar,
  Button,
  Card,
  Dropdown,
  Modal,
  Steps,
  Tabs,
  Theme,
  Toggle,
} from "react-daisyui";
import { useState } from "react";
export default function App() {
  const [visible, toggleVisible] = useState(false);

  return (
    <div className='flex flex-col gap-2'>
      {/* buttons */}
      <div className='m-4 space-x-2'>
        <Button color='primary'>primary</Button>
        <Button color='secondary'>secondary</Button>
        <Button color='accent'>accent</Button>
      </div>

      {/* same buttons with another theme! */}
      <Theme dataTheme='valentine' className='m-4 space-x-2'>
        <Button
          color='primary'
          onClick={() => {
            alert("valentine");
          }}
        >
          primary
        </Button>
        <Button color='secondary'>secondary</Button>
        <Button color='accent'>accent</Button>
      </Theme>

      {/* tab */}
      <Tabs value={2} variant='lifted' className='m-4'>
        <Tabs.Tab value={1}>Tab 1</Tabs.Tab>
        <Tabs.Tab value={2}>Tab 2</Tabs.Tab>
        <Tabs.Tab value={3}>Tab 3</Tabs.Tab>
      </Tabs>

      {/* toggle */}
      <div className='m-4 flex space-x-4'>
        <Toggle color='primary' checked />
        <Toggle color='secondary' checked />
        <Toggle color='accent' checked />
      </div>

      {/* card */}
      <Card className='shadow-2xl w-80 m-4'>
        <figure>
          <img src='https://picsum.photos/id/1005/500/250' />
        </figure>
        <Card.Body>
          <Card.Title>DaisyUI Card</Card.Title>
          <p>
            Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
            sit necessitatibus.
          </p>
        </Card.Body>
      </Card>

      {/* dropdown */}
      <Dropdown>
        <Dropdown.Toggle>Dropdown</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* modal button */}
      <Button className='w-32' onClick={() => toggleVisible(!visible)}>
        Modal
      </Button>
      {/* modal content */}
      <Modal open={visible} onClickBackdrop={() => toggleVisible(false)}>
        <p>
          Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut
          adipisci qui iusto illo eaque. Consequatur repudiandae et. Nulla ea
          quasi eligendi. Saepe velit autem minima.
        </p>
      </Modal>

      {/* steps */}
      <Steps>
        <Steps.Step color='primary'>Register</Steps.Step>
        <Steps.Step color='primary'>Choose plan</Steps.Step>
        <Steps.Step>Purchase</Steps.Step>
        <Steps.Step>Receive Product</Steps.Step>
      </Steps>

      <br />

      {/* avatar */}
      <div className='flex gap-2'>
        <Avatar
          shape='circle'
          src='http://daisyui.com/tailwind-css-component-profile-1@94w.png'
        />
        <Avatar
          shape='circle'
          src='http://daisyui.com/tailwind-css-component-profile-2@94w.png'
        />
      </div>
      <input
        type='text'
        placeholder='Type here'
        class='input w-full max-w-xs'
      />
    </div>
  );
}
