import React, { ReactElement } from "react";
import { Row, Col, Space, Typography } from "antd";

const { Text, Title } = Typography;
export function FooterComponent(): ReactElement {
  return (
    <>
      <br />
      <Row className="my-4 pt-4  border-top border-2 border-dark">
        <Col span={2}></Col>
        <Col span={5} className="d-flex flex-column  ">
          <Title level={3} type="secondary">
            Movie.vn
          </Title>
          <Text className="pb-4">Xem phim miễn phí</Text>
        </Col>
        <Col span={5} className="d-flex flex-column ">
          <Title className="pb-4" level={4}>
            Giới Thiệu
          </Title>
          <Text className="pb-4">Về chúng tôi</Text>
          <Text className="pb-4">Thỏa thuận sử dụng</Text>
          <Text className="pb-4">Quy chế hoạt động</Text>
          <Text className="pb-4">Chính sách bảo mật</Text>
        </Col>
        <Col span={6} className="d-flex flex-column  ">
          <Title className="pb-4" level={4}>
            Góc điện ảnh
          </Title>
          <Text className="pb-4">Thể loại phim</Text>
          <Text className="pb-4">Bình luận phim</Text>
          <Text className="pb-4">Xem phim miễn phí</Text>
          <Text className="pb-4">Blog điện ảnh</Text>
          <Text className="pb-4">Phim hay trong tháng</Text>
        </Col>
        <Col span={6} className="d-flex flex-column  ">
          <Title className="pb-4" level={4}>
            Hỗ trợ
          </Title>
          <Text className="pb-4">Góp ý</Text>
          <Text className="pb-4">Sale v& services</Text>
          <Text className="pb-4">Rạp / Giá vé</Text>
          <Text className="pb-4">Tuyển dung</Text>
        </Col>
      </Row>
    </>
  );
}
