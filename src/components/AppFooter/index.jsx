import { Typography } from "antd";

function AppFooter() {
  return (
    <div className="AppFooter">
      <Typography.Link href="tel:+123456789">+51 957846312</Typography.Link>
      <Typography.Link href="https://www.google.com" target={"_blank"}>
        Política de Privacidad
      </Typography.Link>
      <Typography.Link href="https://www.google.com" target={"_blank"}>
        Términos de Uso
      </Typography.Link>
    </div>
  );
}
export default AppFooter;
