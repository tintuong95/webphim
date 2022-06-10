import React, { ReactElement, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Typography, Modal, Button, Row, Col } from "antd";
import { Pagination } from "swiper";
import { NavLink } from "react-router-dom";

const { Title, Text } = Typography;

type PropsType = {
  title: string;
  film: any[];
};

export function SwiperComponent(props: PropsType): ReactElement {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [detailFilm, setDetailFilm]: any = useState({});
  const showModal = async (item: any) => {
    await setDetailFilm(item);
    await setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const styleBg = {
    width: "100%",
    height: "300px",
    backgroundImage: `url("")`,
  };

  return (
    <div className="my-3 px-4">
      <Title className="titleCategory "  level={4}>{props.title}</Title>
      <br />
      <Modal
        width={1000}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div style={styleBg}>
          <img
            style={{ ...styleBg, objectFit: "cover" }}
            src={`http://localhost:5000/${detailFilm?.img}`}
            crossOrigin="anonymous"
            alt=""
          />
        </div>
        <Row className="mt-4">
          <Col span={8} className="d-flex flex-column">
            <NavLink to={{
              pathname:"/play",
              state:{link:detailFilm?.link,id:detailFilm?.id}
            }}>
              <Button className="w-75 mb-2 " size="large" type="primary" danger>
                Xem phim
              </Button>
            </NavLink>
           
            <Text  className="my-2">
              Nhà sản xuất : {detailFilm?.author?.name}
            </Text>
            <Text  className="my-2">
              Năm sản xuất : {detailFilm?.publicYear}
            </Text>
            <Text  className="my-2">
              Thời lượng : 150 phút
            </Text>
            <Text  className="my-2">
              Thể loại : {detailFilm?.category?.name}
            </Text>
          </Col>
          <Col span={16}>
          <Title level={4} className="my-2">
              {detailFilm?.name}
            </Title>
           
            <Text  className="my-2">
              {detailFilm?.description}
            </Text>
          </Col>
        </Row>
      </Modal>
      <Swiper
       
        slidesPerView={1}
        spaceBetween={3}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 3,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 6,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 9,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 12,
          },
          "@2.00": {
            slidesPerView: 5,
            spaceBetween: 15,
          },
          "@2.50": {
            slidesPerView: 6,
            spaceBetween: 18,
          },
        }}
        modules={[Pagination]}
        className="mySwiper my-4"
      >
        {props.film.map((item, index) => {
          return (
            <SwiperSlide
            className="mx-4"
           
              key={index}
              onClick={() => {
                showModal(item);
              }}
            >
              <img
                src={`http://localhost:5000/${item?.img}`}
                alt=""
                crossOrigin="anonymous"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
