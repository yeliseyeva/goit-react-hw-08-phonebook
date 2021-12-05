import { useDispatch, useSelector } from "react-redux";
import defaultAvatar from "./default-avatar.png";
import { getUserName } from "../../redux/auth/auth-selectors";
import authOperations from "../../redux/auth/auth-operations";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  const avatar = defaultAvatar;

  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Добро пожаловать, {name}</span>
      <Button
        variant="outline-primary"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Выйти
      </Button>
    </div>
  );
}
