import React, { ReactElement, useState } from "react";
import { Row, Col, Button, Typography, Avatar, Badge, Input } from "antd";
import { UserOutlined, SearchOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import {
  resetOffset,
  setFilmCategoryOrSearch,
  setIdCategory,
  setOffet,
} from "../stores/reducers/reducerFilm";
import { useDispatch } from "react-redux";
import { Login } from "./Login";
import { Signup } from "./Signup";

const { Title } = Typography;

export function HeaderComponent(): ReactElement {
  const [search, setSearch] = useState<string>();
  const dispatch = useDispatch();

  return (
    <>
      <Row style={{backgroundColor:"red"}} justify="end">
        <Col>
          <Login />
        </Col>
        <Col>
          <Signup />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col span={6}>
          <NavLink to="/home">
            <Title className="ms-5 mt-2" level={3} type="secondary">
              Movie.vn
            </Title>
          </NavLink>
        </Col>
        <Col span={18}>
          <Row justify="end" className="me-3">
            <Col>
              <NavLink to="/home">
                <Button size="large" type="link">
                  Home
                </Button>
              </NavLink>
            </Col>
            <Col>
              <NavLink
                onClick={async () => {
                  await dispatch(setIdCategory(3));
                  await dispatch(setFilmCategoryOrSearch());
                  await dispatch(resetOffset());
                  await dispatch(setOffet());
                }}
                to={{ pathname: "/category/action", state: { categoryId: 3 } }}
              >
                <Button size="large" type="link">
                  Action
                </Button>
              </NavLink>
            </Col>
            <Col>
              <NavLink
                onClick={async () => {
                  await dispatch(setIdCategory(6));
                  await dispatch(setFilmCategoryOrSearch());
                  await dispatch(resetOffset());
                  await dispatch(setOffet());
                }}
                to={{ pathname: "/category/horror", state: { categoryId: 6 } }}
              >
                <Button size="large" type="link">
                  Horror
                </Button>
              </NavLink>
            </Col>

            <Col>
              <NavLink
                onClick={async () => {
                  await dispatch(setIdCategory(5));
                  await dispatch(setFilmCategoryOrSearch());
                  await dispatch(resetOffset());
                  await dispatch(setOffet());
                }}
                to={{ pathname: "/category/anime", state: { categoryId: 5 } }}
              >
                <Button size="large" type="link">
                  Anime
                </Button>
              </NavLink>
            </Col>
            <Col>
              <NavLink
                onClick={async () => {
                  await dispatch(setIdCategory(7));
                  await dispatch(setFilmCategoryOrSearch());
                  await dispatch(resetOffset());
                  await dispatch(setOffet());
                }}
                to={{ pathname: "/category/scifi", state: { categoryId: 7 } }}
              >
                <Button size="large" type="link">
                  Sci-fi
                </Button>
              </NavLink>
            </Col>

            <Col className="mt-1">
              <Input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setSearch(e.target.value);
                }}
                className="search"
                type="link"
              />
            </Col>
            <Col className="mt-1">
              <NavLink
                onClick={async () => {
                  await dispatch(setFilmCategoryOrSearch());
                  await dispatch(resetOffset());
                  await dispatch(setOffet());
                }}
                to={{
                  pathname: "/category/search",
                  state: { search: search },
                }}
              >
                <Button icon={<SearchOutlined />} type="primary" danger />
              </NavLink>
            </Col>

            <Col className="mt-1 ms-3">
              <span className="avatar-item">
                <Badge dot>
                  <Avatar shape="square" icon={<UserOutlined />} />
                </Badge>
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
