import { Space, Table, Typography, Button, Modal, Form, Input, message } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";

function Orders() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingOrder, setEditingOrder] = useState(null);
  const [form] = Form.useForm();

  const apiBaseUrl = "http://localhost:8000/order"; // Ajusta la URL base según tu configuración

  // Obtener los pedidos al cargar el componente
  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${apiBaseUrl}/all`);
      setDataSource(data);
    } catch (error) {
      console.error("Error al obtener los pedidos:", error);
      message.error("No se pudieron cargar los pedidos.");
    } finally {
      setLoading(false);
    }
  };

  // Agregar un nuevo pedido
  const addOrder = async (values) => {
    try {
      const { data } = await axios.post(`${apiBaseUrl}/create`, values);
      setDataSource([...dataSource, data]);
      message.success("Pedido agregado exitosamente.");
    } catch (error) {
      console.error("Error al agregar el pedido:", error);
      message.error("No se pudo agregar el pedido.");
    }
  };

  // Actualizar un pedido existente
  const updateOrder = async (id, values) => {
    try {
      const { data } = await axios.put(`${apiBaseUrl}/${id}`, values);
      const updatedData = dataSource.map((item) =>
        item._id === id ? { ...item, ...data } : item
      );
      setDataSource(updatedData);
      message.success("Pedido actualizado exitosamente.");
    } catch (error) {
      console.error("Error al actualizar el pedido:", error);
      message.error("No se pudo actualizar el pedido.");
    }
  };

  // Eliminar un pedido
  const deleteOrder = async (id) => {
    try {
      await axios.delete(`${apiBaseUrl}/${id}`);
      const filteredData = dataSource.filter((item) => item._id !== id);
      setDataSource(filteredData);
      message.success("Pedido eliminado exitosamente.");
    } catch (error) {
      console.error("Error al eliminar el pedido:", error);
      message.error("No se pudo eliminar el pedido.");
    }
  };

  // Manejadores del modal
  const handleAddOrder = () => {
    setIsEditing(false);
    setIsModalVisible(true);
    form.resetFields();
  };

  const handleEditOrder = (record) => {
    setIsEditing(true);
    setEditingOrder(record);
    form.setFieldsValue(record);
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    form
      .validateFields()
      .then((values) => {
        if (isEditing) {
          updateOrder(editingOrder._id, values);
        } else {
          addOrder(values);
        }
        form.resetFields();
        setIsModalVisible(false);
      })
      .catch((info) => {
        console.error("Validación fallida:", info);
      });
  };

  const handleModalCancel = () => {
    form.resetFields();
    setIsModalVisible(false);
  };

  const handleDeleteOrder = (record) => {
    deleteOrder(record._id);
  };

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Pedidos</Typography.Title>
      <Button type="primary" onClick={handleAddOrder}>
        Agregar Pedido
      </Button>
      <Table
        loading={loading}
        columns={[
          {
            title: "Título",
            dataIndex: "title",
          },
          {
            title: "Precio",
            dataIndex: "price",
            render: (value) => <span>S/ {value}</span>,
          },
          {
            title: "Descuento",
            dataIndex: "discountPercentage",
            render: (value) => <span>{value}%</span>,
          },
          {
            title: "Cantidad",
            dataIndex: "quantity",
          },
          {
            title: "Total",
            dataIndex: "total",
          },
          {
            title: "Acciones",
            render: (text, record) => (
              <Space size="middle">
                <Button type="link" onClick={() => handleEditOrder(record)}>
                  Modificar
                </Button>
                <Button type="link" danger onClick={() => handleDeleteOrder(record)}>
                  Borrar
                </Button>
              </Space>
            ),
          },
        ]}
        dataSource={dataSource}
        rowKey="_id" // Usa `_id` como clave única
        pagination={{
          pageSize: 5,
        }}
      />

      <Modal
        title={isEditing ? "Modificar Pedido" : "Agregar Nuevo Pedido"}
        open={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        okText={isEditing ? "Guardar Cambios" : "Guardar"}
        cancelText="Cancelar"
      >
        <Form form={form} layout="vertical" name="form_in_modal">
          <Form.Item
            name="title"
            label="Título"
            rules={[{ required: true, message: "Por favor ingrese el título del pedido" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="price"
            label="Precio"
            rules={[{ required: true, message: "Por favor ingrese el precio del pedido" }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="discountPercentage"
            label="Descuento (%)"
            rules={[{ required: true, message: "Por favor ingrese el descuento" }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="quantity"
            label="Cantidad"
            rules={[{ required: true, message: "Por favor ingrese la cantidad" }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="total"
            label="Total"
            rules={[{ required: true, message: "Por favor ingrese el total" }]}
          >
            <Input type="number" />
          </Form.Item>
        </Form>
      </Modal>
    </Space>
  );
}

export default Orders;
