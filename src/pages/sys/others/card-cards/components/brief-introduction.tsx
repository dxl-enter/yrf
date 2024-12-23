import {Carousel} from "antd";
import React from "react";
import banner3 from "@/assets/images/background/overlay_2.jpg";

export default function BriefIntroduction() {
    const contentStyle: React.CSSProperties = {
        height: "160px",
        color: "#fff",
        padding: '20px',
        background: `url("${banner3}") no-repeat center/cover`
    };
    return (
        <Carousel dotPosition="bottom">
            <div>
                <div style={contentStyle}>
                    <span className="gallery-text" style={{fontSize: '26px', fontWeight: 'bold'}}>什么是NFT</span>
                    <p>玩法介绍、卡牌专辑、公告须知等</p>
                    <p>平台宣传活动</p>
                </div>

            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
    )
}
