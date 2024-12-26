import React from "react";
import banner3 from "@/assets/images/background/overlay_2.jpg";

export default function IndexMore() {
    const contentStyle: React.CSSProperties = {
        position: "relative",
        height: "160px",
        color: "#fff",
        padding: '20px',
        margin: '16px 16px',
        background: `url("${banner3}") no-repeat center/cover`,
        borderRadius: '8px',
    };
    return (
        <div className="w-full">
            <div style={contentStyle} className="box-shadow-red">
                <span className="gallery-text" style={{fontSize: '26px', fontWeight: 'bold'}}>LP铸造</span>
                <p>玩法介绍、卡牌专辑、公告须知等</p>
                <p>平台宣传活动</p>
            </div>
            <div style={contentStyle} className="box-shadow-green">
                <span className="gallery-text" style={{fontSize: '26px', fontWeight: 'bold'}}>模仿盲盒</span>
                <p>玩法介绍、卡牌专辑、公告须知等</p>
                <p>平台宣传活动</p>
            </div>
            <div style={contentStyle} className="box-shadow-red">
                <span className="gallery-text" style={{fontSize: '26px', fontWeight: 'bold'}}>NFT卡牌</span>
                <p>玩法介绍、卡牌专辑、公告须知等</p>
                <p>平台宣传活动</p>
            </div>
            <div style={contentStyle} className="box-shadow-green">
                <span className="gallery-text" style={{fontSize: '26px', fontWeight: 'bold'}}>其他模块</span>
                <p>玩法介绍、卡牌专辑、公告须知等</p>
                <p>平台宣传活动</p>
            </div>
        </div>
    );
}
