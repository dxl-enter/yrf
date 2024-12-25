
import React from "react";
import {Button, Card, Carousel, Flex, Tag, Typography} from "antd";
import {useNavigate} from "react-router";
import banner3 from "@/assets/images/background/overlay_2.jpg";
export default function CardList() {
    const navigatge = useNavigate();
    const goCardDetails = () => {
        navigatge('/card_details');
    };
    const cardStyle: React.CSSProperties = {
        width: '100%',
    };
    const imgStyle: React.CSSProperties = {
        display: 'block',
        width: '100%',
        borderRadius: '8px 8px 0 0',
    };
    const contentStyle: React.CSSProperties = {
        width: "80vw",
        margin: '16px auto',
        padding: '0 16px 0 0',
        justifyContent: 'flex-end'
    };
    return (
        <div className="w-full">
            <Card hoverable style={cardStyle} styles={{ body: { padding: 0, overflow: 'hidden' } }}>
                    <Flex vertical align="center">
                        <div style={{position: 'relative'}}>
                            <img
                                alt="avatar"
                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                style={imgStyle}
                            />
                            <Tag style={{
                                position: 'absolute',
                                margin: 0,
                                padding: '8px 16px',
                                top: 0,
                                left: 0,
                                zIndex: 1,
                                fontSize: '20px',
                                borderRadius: '8px 0 8px 0',
                            }} color="#87d068">发售中</Tag>
                        </div>
                        <Carousel dotPosition="bottom" style={contentStyle} className="card">
                            <div>
                                <div className="flex flex-row items-center">
                                    <img
                                        alt="avatar"
                                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                        width="100px"
                                        style={{borderRadius: '8px 0 0 8px',}}
                                    />
                                    <div className="ml-2">
                                        <Typography.Title level={5}>什么是盲盒</Typography.Title>
                                        <p>平台宣传活动</p>
                                    </div>
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
                        <Flex align="flex-end" justify="space-between" className="w-full" style={{ padding: 32 }}>
                            <div>
                                <Typography.Title level={4}>
                                    牧师盲盒
                                </Typography.Title>
                                <p>
                                    <Tag color="#2db7f5">倍数</Tag>
                                    <Tag color="#87d068">限时优先购</Tag>
                                </p>
                            </div>

                            <Typography.Title level={3}>
                                128USDT
                            </Typography.Title>
                        </Flex>
                    </Flex>
                </Card>
            <Card hoverable style={cardStyle} styles={{ body: { padding: 0, overflow: 'hidden' } }}>
                <Flex vertical align="center">
                    <div style={{position: 'relative'}}>
                        <img
                            alt="avatar"
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                            style={imgStyle}
                        />
                        <div style={{
                            position: 'absolute',
                            margin: 0,
                            height: '200px',
                            width: '200px',
                            top: '50%',
                            left: '50%',
                            zIndex: 1,
                            fontSize: '42px',
                            borderRadius: '50%',
                            background: 'rgba(0,0,0,0.5)',
                            transform: 'translate(-50%, -50%)',
                            textAlign: 'center',
                            lineHeight: '200px'
                        }} className="box-shadow-inset-grey">已售罄</div>
                    </div>
                    <Carousel dotPosition="bottom" style={contentStyle} className="card">
                        <div>
                            <div className="flex flex-row items-center">
                                <img
                                    alt="avatar"
                                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                    width="100px"
                                    style={{borderRadius: '8px 0 0 8px',}}
                                />
                                <div className="ml-2">
                                    <Typography.Title level={5}>什么是盲盒</Typography.Title>
                                    <p>平台宣传活动</p>
                                </div>
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
                    <Flex align="flex-end" justify="space-between" className="w-full" style={{ padding: 32 }}>
                        <div>
                            <Typography.Title level={4}>
                                牧师盲盒
                            </Typography.Title>
                            <p>
                                <Tag color="#2db7f5">倍数</Tag>
                                <Tag color="#87d068">限时优先购</Tag>
                            </p>
                        </div>

                        <Typography.Title level={3}>
                            128USDT
                        </Typography.Title>
                    </Flex>
                </Flex>
            </Card>
        </div>
    )
}
