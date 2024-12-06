import { Space, Table, Typography, Button, Modal, Form, Input, message } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";

function Customers() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // Nuevo estado para diferenciar entre agregar y editar
  const [editingCustomer, setEditingCustomer] = useState(null); // Cliente seleccionado para edición
  const [form] = Form.useForm();

  const apiBaseUrl = "http://localhost:8000/customer"; // Ajusta la URL base según tu configuración

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${apiBaseUrl}/all`);
      setDataSource(data);
    } catch (error) {
      console.error("Error al obtener los clientes:", error);
      message.error("No se pudo cargar la lista de clientes.");
    } finally {
      setLoading(false);
    }
  };

  // Agregar un nuevo cliente
  const addCustomer = async (values) => {
    try {
      const { data } = await axios.post(`${apiBaseUrl}/create`, values);
      setDataSource([...dataSource, data]);
      message.success("Cliente agregado exitosamente.");
    } catch (error) {
      console.error("Error al agregar el cliente:", error);
      message.error("No se pudo agregar el cliente.");
    }
  };

  // Actualizar un cliente existente
  const updateCustomer = async (id, values) => {
    try {
      const { data } = await axios.put(`${apiBaseUrl}/${id}`, values);
      const updatedData = dataSource.map((item) =>
        item._id === id ? { ...item, ...data } : item
      );
      setDataSource(updatedData);
      message.success("Cliente actualizado exitosamente.");
    } catch (error) {
      console.error("Error al actualizar el cliente:", error);
      message.error("No se pudo actualizar el cliente.");
    }
  };

  // Eliminar un cliente
  const deleteCustomer = async (id) => {
    try {
      await axios.delete(`${apiBaseUrl}/${id}`);
      const filteredData = dataSource.filter((item) => item._id !== id);
      setDataSource(filteredData);
      message.success("Cliente eliminado exitosamente.");
    } catch (error) {
      console.error("Error al eliminar el cliente:", error);
      message.error("No se pudo eliminar el cliente.");
    }
  };

  // Manejadores del modal
  const handleAddCustomer = () => {
    setIsEditing(false);
    setIsModalVisible(true);
    form.resetFields();
  };

  const handleEditCustomer = (record) => {
    setIsEditing(true);
    setEditingCustomer(record);
    form.setFieldsValue(record);
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    form
      .validateFields()
      .then((values) => {
        if (isEditing) {
          updateCustomer(editingCustomer._id, values);
        } else {
          addCustomer(values);
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

  const handleDeleteCustomer = (record) => {
    deleteCustomer(record._id);
  };

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Clientes</Typography.Title>
      <Button type="primary" onClick={handleAddCustomer}>
        Agregar Cliente
      </Button>
      <Table
        loading={loading}
        columns={[
          {
            title: "Nombre",
            dataIndex: "firstName",
          },
          {
            title: "Apellido",
            dataIndex: "lastName",
          },
          {
            title: "Correo",
            dataIndex: "email",
          },
          {
            title: "Teléfono",
            dataIndex: "phone",
          },
          {
            title: "Dirección",
            dataIndex: "address",
          },
          {
            title: "Acciones",
            render: (text, record) => (
              <Space size="middle">
                <Button type="link" onClick={() => handleEditCustomer(record)}>
                  Modificar
                </Button>
                <Button type="link" danger onClick={() => handleDeleteCustomer(record)}>
                  Borrar
                </Button>
              </Space>
            ),
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      />

      <Modal
        title={isEditing ? "Modificar Cliente" : "Agregar Nuevo Cliente"}
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        okText={isEditing ? "Guardar Cambios" : "Guardar"}
        cancelText="Cancelar"
      >
        <Form form={form} layout="vertical" name="form_in_modal">
          <Form.Item
            name="firstName"
            label="Nombre"
            rules={[{ required: true, message: "Por favor ingrese el nombre del cliente" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Apellido"
            rules={[{ required: true, message: "Por favor ingrese el apellido del cliente" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Correo"
            rules={[{ required: true, message: "Por favor ingrese el correo del cliente" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Teléfono"
            rules={[{ required: true, message: "Por favor ingrese el teléfono del cliente" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="address"
            label="Dirección"
            rules={[{ required: true, message: "Por favor ingrese la dirección del cliente" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </Space>
  );
}

export default Customers;
