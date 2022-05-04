import Counter from "../Counter";
import { useGlobalStore } from "./../../utils/StoreApi";

const Footer = () => {
  const { pageView } = useGlobalStore();
  return (
    <footer>
      <h3>footer</h3>
      <Counter />
      {pageView}
    </footer>
  );
};

export default Footer;
