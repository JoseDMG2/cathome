import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Dashboard",
            icon: <AppstoreOutlined />,
            key: "/webadmin/dashboard",
          },
          {
            label: "Inventario",
            key: "/webadmin/inventory",
            icon: <ShopOutlined />,
          },
          {
            label: "Pedidos",
            key: "/webadmin/orders",
            icon: <ShoppingCartOutlined />,
          },
          {
            label: "Clientes",
            key: "/webadmin/customers",
            icon: <UserOutlined />,
          },
          {
            label: "Cerrar Sesión",
            key: "/",
          },
        ]}
      ></Menu>
    </div>
  );
}
export default SideMenu;
