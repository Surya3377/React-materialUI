// import { Row, Col, Carousel } from "antd";
// import { LeftOutlined,RightOutlined } from "@ant-design/icons";
// import videoFile from "../../assets/videos/firstVideo.mp4";
// import videoFile1 from "../../assets/videos/secondVideo.mp4";

// const contentStyle = {
//   height: "160px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "#364d79",
// };

// const SampleNextArrow = props => {
//   const { className, style, onClick } = props
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         color: 'black',
//         fontSize: '15px',
//         lineHeight: '1.5715'
//       }}
//       onClick={onClick}
//     >
//       {/* <RightOutlined /> */}
//     </div>
//   )
// }

// const SamplePrevArrow = props => {
//   const { className, style, onClick } = props
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         color: 'black',
//         fontSize: '15px',
//         lineHeight: '1.5715',
//       }}
//       onClick={onClick}
//     >
//       {/* <LeftOutlined /> */}
//     </div>
//   )
// }

// const settings = {
//   nextArrow: <SampleNextArrow />,
//   prevArrow: <SamplePrevArrow />,
// };

// const Header = () => {
//   return (
//     <div>
//       <Row justify="center">
//         <Col span={16}>
//           <Carousel arrows {...settings} autoplay>
//             <div style={contentStyle}>
//               <video width="100%" height={250} controls>
//                 <source src={videoFile} type="video/mp4" />
//               </video>
//             </div>
//             <div style={contentStyle}>
//               <video width="100%" height={250} controls>
//                 <source src={videoFile1} type="video/mp4" />
//               </video>
//             </div>
//             <div style={contentStyle}>
//               <video width="100%" height={250} controls>
//                 <source src={videoFile} type="video/mp4" />
//               </video>
//             </div>
//             <div style={contentStyle}>
//               <video width="100%" height={250} controls>
//                 <source src={videoFile} type="video/mp4" />
//               </video>
//             </div>
//           </Carousel>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default Header;

import React, { useState } from "react";
import classes from "./Header.module.css";
import { Button, Dropdown,Space, message } from "antd";
import {DownOutlined,SearchOutlined,DownloadOutlined,PoweroffOutlined,UserOutlined} from "@ant-design/icons";
import type { MenuProps } from "antd/lib/menu";
// import type { SizeType } from "antd/es/config-provider/SizeContext";
// import GooglePayButton from "@google-pay/button-react"

const handleMenuClick: MenuProps["onClick"] = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};

const items: MenuProps["items"] = [
  {
    label: "Submit and continue",
    key: "1",
  },

  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};

const Header = () => {
  const [loadings, setLoadings] = useState([]);
  const [size, setSize] = useState("large");

  const enterLoading = (index) => {
    setLoadings((state) => {
      const newLoadings = [...state];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((state) => {
        const newLoadings = [...state];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  return (
    <div>
    <div className={classes.dropDowns_buttons}>
      <div className={classes.dropDowns_left}>
        <Dropdown
          menu={{ items }}
          placement="bottomLeft"
          arrow
          className={classes.dropDown}
        >
          <Button>bottomLeft</Button>
        </Dropdown>
        <Dropdown
          menu={{ items }}
          trigger={["click"]}
          className={classes.dropDown1}
        >
          <a  onClick={(e) => e.preventDefault()}>
            <Space>
              Click me
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        <Dropdown menu={{ items }} className={classes.dropDown2}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Hover me
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        <Dropdown.Button
          type="primary"
          loading={loadings[0]}
          menu={{ items }}
          onClick={() => enterLoading(0)}
        >
          Submit
        </Dropdown.Button>
        <Dropdown.Button
          menu={menuProps}
          placement="bottom"
          icon={<UserOutlined />}
        >
          Dropdown
        </Dropdown.Button>
      </div>
      <div className={classes.buttons_right}>
        <Button type="primary" className={classes.btn}>
          Primary Button
        </Button>
        <Button
          type="primary"
          icon={<SearchOutlined />}
          className={classes.search_btn}
        >
          Search
        </Button>
        <Button
          type="primary"
          shape="round"
          icon={<DownloadOutlined />}
          size={size}
          className={classes.download}
        >
          Download
        </Button>
        <Button disabled>disabled</Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          onClick={() => enterLoading(1)}
          className={classes.powerOff}
        >
          Click me!
        </Button>
      </div>
    </div>
      <div>
      {/* <GooglePayButton
  environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '100.00',
      currencyCode: 'USD',
      countryCode: 'US',
    },
  }}
  onLoadPaymentData={paymentRequest => {
    console.log('load payment data', paymentRequest);
  }}
/> */}
      </div>

     
    </div>
  );
};

export default Header;
