import {Divider, Image} from "antd";

export default function StrategyGuide() {
    return (
        <div className="flex flex-col items-center">
            <Image
                width="100%"
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
            <div className="w-1/2">
                <Divider variant="dashed" style={{ borderColor: '#7cb305' }} dashed>LP铸造说明</Divider>
            </div>
            <div className="px-4 gallery-text">
                <p>LP铸造基本逻辑是通过预留的代币，撬动市场玩家参与流动池搭建。预留代币为发行量的25%:</p>
                <p>1:LP铸造地址放置2.5亿代币，玩家通过DAPP页面选择投资50USDT、 100USDT    200USDT   300USDT    400USDT      500USDT六个等级，通过DAPP进入LP铸造地址，进场的u，合约自动组LP流动池，（举例：玩家进场50u，合约调用25u，与25u的等值代币组流动池，组池子的代币来源于预留的2.5亿总量中调用，，剩余25u沉淀钱包地址，。组池地址使用2.5亿预留的铸造池地址，）</p>
                <p>2:每天的LP铸造总量为，1万USDT，如果当天参与的人没有用完1万的额度，顺延第二天，与第二天额度相加，举例：第一天剩余2000，第二天为1.2万的额度，这个额度分配，设置成手动调整，每天设计多少额度，手动调整，  </p>
            </div>
        </div>
    )
}
