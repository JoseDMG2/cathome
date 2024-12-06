import { Space, Table, Typography, Button, Modal, Form, Input, message } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";

function Inventory() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [form] = Form.useForm();

  const apiBaseUrl = "http://localhost:8000/product"; // Ajusta la URL base según tu configuración

  // Obtener el inventario al cargar el componente
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${apiBaseUrl}/all`);
      setDataSource(data);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
      message.error("No se pudo cargar el inventario.");
    } finally {
      setLoading(false);
    }
  };

  // Agregar un nuevo producto
  const addProduct = async (values) => {
    try {
      const { data } = await axios.post(`${apiBaseUrl}/create`, values);
      setDataSource([...dataSource, data]);
      message.success("Producto agregado exitosamente.");
    } catch (error) {
      console.error("Error al agregar el producto:", error);
      message.error("No se pudo agregar el producto.");
    }
  };

  // Actualizar un producto existente
  const updateProduct = async (id, values) => {
    try {
      const { data } = await axios.put(`${apiBaseUrl}/${id}`, values);
      const updatedData = dataSource.map((item) =>
        item._id === id ? { ...item, ...data } : item
      );
      setDataSource(updatedData);
      message.success("Producto actualizado exitosamente.");
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
      message.error("No se pudo actualizar el producto.");
    }
  };

  // Eliminar un producto
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${apiBaseUrl}/${id}`);
      const filteredData = dataSource.filter((item) => item._id !== id);
      setDataSource(filteredData);
      message.success("Producto eliminado exitosamente.");
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
      message.error("No se pudo eliminar el producto.");
    }
  };

  // Manejadores del modal
  const handleAddProduct = () => {
    setIsEditing(false);
    setIsModalVisible(true);
    form.resetFields();
  };

  const handleEditProduct = (record) => {
    setIsEditing(true);
    setEditingProduct(record);
    form.setFieldsValue(record);
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    form
      .validateFields()
      .then((values) => {
        if (isEditing) {
          updateProduct(editingProduct._id, values);
        } else {
          addProduct(values);
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

  const handleDeleteProduct = (record) => {
    deleteProduct(record._id);
  };

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Inventario</Typography.Title>
      <Button type="primary" onClick={handleAddProduct}>
        Agregar Producto
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
            title: "Cantidad Disponible",
            dataIndex: "stock",
          },
          {
            title: "Marca",
            dataIndex: "brand",
          },
          {
            title: "Categoría",
            dataIndex: "category",
          },
          {
            title: "Acciones",
            render: (text, record) => (
              <Space size="middle">
                <Button type="link" onClick={() => handleEditProduct(record)}>
                  Modificar
                </Button>
                <Button type="link" danger onClick={() => handleDeleteProduct(record)}>
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
        title={isEditing ? "Modificar Producto" : "Agregar Nuevo Producto"}
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
            rules={[{ required: true, message: "Por favor ingrese el título del producto" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="price"
            label="Precio"
            rules={[{ required: true, message: "Por favor ingrese el precio del producto" }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="stock"
            label="Cantidad Disponible"
            rules={[{ required: true, message: "Por favor ingrese la cantidad disponible" }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="brand"
            label="Marca"
            rules={[{ required: true, message: "Por favor ingrese la marca" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="category"
            label="Categoría"
            rules={[{ required: true, message: "Por favor ingrese la categoría" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </Space>
  );
}

export default Inventory;
