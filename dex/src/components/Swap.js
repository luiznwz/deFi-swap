import React, { useState, useEffect} from 'react'
import { Input, Popover, Radio, Modal, message } from "antd";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  DownOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import tokenList from '../tokenList.json';

function Swap() {

  const [slippage, setSlippage] = useState(2.5);

  const [tokenOneAmout, setTokenOneAmout] = useState(null);
  const [tokenTwoAmout, setTokenTwoAmout] = useState(null);

  const [tokenOne, setTokenOne] = useState(tokenList[0]);
  const [tokenTwo, setTokenTwo] = useState(tokenList[1]);



  function handleSlippageChange(e) {
    setSlippage(e.target.value);
  }

  function changeAmount(e) {
    setTokenOneAmout(e.target.value);
  }

  const settings = (
    <div>
      <div>Slippage Tolerance</div>
      <Radio.Group value={slippage} onChange={handleSlippageChange}>
        <Radio.Button value={0.5}>0.5%</Radio.Button>
        <Radio.Button value={2.5}>2.5%</Radio.Button>
        <Radio.Button value={5}>5.0%</Radio.Button>
      </Radio.Group>
    </div>
  );

  return (
    <div className='tradeBox'>
      <div className='tradeBoxHeader'>
        <h4>Swap</h4>
       <Popover
       content={settings}
        title='Settings'
        trigger='click'
        placement='bottomRight'
       >
       <SettingOutlined className='cog'/>
       </Popover>

      </div>
      <div className='inputs'>
        <Input placeholder='0' value={tokenOneAmout} onChange={changeAmount}/>
        <Input placeholder='0' value={tokenTwoAmout} disabled={true}/>
        <div className='assetOne'>
        <img src={tokenOne.img} alt='assetOneLogo' className='assetLogo'/>
        {tokenOne.ticker}
        <DownOutlined/>
        </div>
        <div className='assetTwo'>
        <img src={tokenTwo.img} alt='assetOneLogo' className='assetLogo'/>
        {tokenTwo.ticker}
        <DownOutlined/>
</div>
      </div>
    </div>
  )
}

export default Swap