import React, { ReactElement, useEffect, useState } from "react";
import { FooterComponent } from "../components/FooterComponent";
import { HeaderComponent } from "../components/HeaderComponent";
import { Row, Col, Button, Typography, Modal } from "antd";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  actionGetFilmAdd,
  actionGetFilmAll,
  actionGetFilmId,
} from "../stores/actions/actionFilm";
import { TypeCategory } from "./Home";
import { setOffet } from "../stores/reducers/reducerFilm";

const { Title, Text } = Typography;
const styleBg = {
  width: "100%",
  height: "300px",
};

enum IdCategory {
  action = 3,
  horror = 6,
  fantasy = 2,
  thriller = 1,
  anime = 5,
  search = 0,
  scifi = 7,
}

export function Detail(): ReactElement {
  const { filmCategoryOrSearch, filmIdCategory, filmOffset, filmDetail } =
    useSelector((state: any) => state.filmReducer);
  const dispatch = useDispatch();
  const param: any = useParams();
  const location: any = useLocation();
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
  useEffect(() => {
    dispatch(
      actionGetFilmAll({
        id: IdCategory[param.name],
        name: TypeCategory.filmCategoryOrSearch,
        search: location.state.search,
      })
    );
  }, [param.name, location.state.search]);

  return (
    <>
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
            <NavLink
              to={{
                pathname: "/play",
                state: { link: detailFilm?.link, id: detailFilm?.id },
              }}
            >
              <Button className="w-75 mb-2 " size="large" type="primary" danger>
                Xem phim
              </Button>
            </NavLink>
            <Title level={5} className="my-2">
              {detailFilm?.name}
            </Title>
            <Title level={5} className="my-2">
              Nhà sản xuất : {detailFilm?.author?.name}
            </Title>
            <Title level={5} className="my-2">
              Năm sản xuất : {detailFilm?.publicYear}
            </Title>
            <Title level={5} className="my-2">
              Thời lượng : 150 phút
            </Title>
            <Title level={5} className="my-2">
              Thể loại : {detailFilm?.category?.name}
            </Title>
          </Col>
          <Col span={16}>
            <Title level={4} className="my-2">
              Nội dung :
            </Title>
            <Title level={5} className="my-2">
              {detailFilm?.description}
            </Title>
          </Col>
        </Row>
      </Modal>
      <HeaderComponent />
      <br />
      <Title className="m-5 titleCategory" level={4}>
        {param.name.toUpperCase()}
      </Title>
      <Row>
        {filmCategoryOrSearch.map((item: any, index: number) => (
          <Col key={index} span={4} className="p-3 text-center">
            <div
              onClick={async () => {
                await showModal(item);
              }}
              className="swiper-slide-edit"
            >
              <img
                src={`http://localhost:5000/${item.img}`}
                crossOrigin="anonymous"
                alt=""
              />
            </div>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-4">
        <Button
          onClick={() => {
            dispatch(setOffet());
            dispatch(
              actionGetFilmAdd({ id: filmIdCategory, offset: filmOffset })
            );
          }}
          type="primary"
          danger
          size="large"
        >
          Xem thêm
        </Button>
      </div>

      <FooterComponent />
    </>
  );
}
