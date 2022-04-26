import "../styles/global.css";
import { useRouter } from "next/router";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const { ids } = router.query;

  console.log("_app", { ids });
  return <Component {...pageProps} />;
};

export default App;
